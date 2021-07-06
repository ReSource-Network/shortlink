import { User } from "@prisma/client";
import { Router } from "express";
import * as yup from "yup";

import { validate } from "../middleware";
import { generate, log, replaceMultiSigOwner } from "../services";
import { Controller } from "./types";
import { createToken } from "./utils/auth.utils";

const registerSchema = yup
  .object()
  .shape({
    email: yup.string().required().email(),
    multiSigAddress: yup.string().required(),
    clientAddress: yup.string().required(),
    userId: yup.string().required(),
  })
  .required();

const recoverSchema = yup
  .object()
  .shape({
    validateEmailToken: yup.string().required(),
    email: yup.string().required().email(),
    newClientAddress: yup.string().required(),
  })
  .required();

export const main: Controller = ({ prisma }) => {
  const router = Router();

  router.get("/token", async (req, res, next) => {
    const { email } = req.body;

    const user: User | null = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      next();
      return res.status(500).send("User not found");
    }

    const token = createToken({ id: user.userId, email: user.email });

    res.status(200).json({
      token,
    });

    next();
  });

  router.get("/", (_, res, next) => {
    res.status(200).send("ok");

    next();
  });

  router.post("/register", validate(registerSchema), async (req, res, next) => {
    const { userId, email, multiSigAddress, clientAddress } = req.body;

    try {
      const exists =
        (await prisma.user.count({ where: { userId } })) ||
        (await prisma.user.count({ where: { email } }));

      if (exists) {
        next();
        return res
          .status(400)
          .send({ ERROR: true, MESSAGE: "USER WITH EMAIL OR USERID EXISTS" });
      }

      const validateEmailToken = await generate();

      const user = await prisma.user.create({
        data: {
          userId,
          email,
          multiSigAddress,
          validateEmailToken,
          clientAddress,
        },
      });

      if (!user) {
        res.status(500).send({
          ERROR: true,
          MESSAGE: "INTERNAL SERVER ERROR: COULD NOT CREATE USER",
        });
        next();
        return;
      }

      return res.status(200).json({
        user,
      });

      next();
    } catch (e) {
      log.error(e);
      return res.status(500).send({
        ERROR: true,
        MESSAGE: "INTERNAL SERVER ERROR: " + e,
      });
    }
  });

  router.post("/recover", validate(recoverSchema), async (req, res, next) => {
    const { validateEmailToken, email, newClientAddress } = req.body;

    try {
      const user: User | null = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        log.info("Error creating user with email: " + email);
        res.status(401).send({
          ERROR: true,
          MESSAGE:
            "INTERNAL SERVER ERROR: COULD NOT FIND USER WITH EMAIL: " + email,
        });
        next();
        return;
      }
      if (validateEmailToken !== user.validateEmailToken) {
        log.info(
          ("Invalid validateEmailToken for token: " +
            user.validateEmailToken) as string
        );
        next();
        return res.status(401).send({
          ERROR: true,
          MESSAGE: "INTERNAL SERVER ERROR: INVALID TOKEN",
        });
      }

      const { id } = user;

      const txId = await replaceMultiSigOwner({
        id,
        newClientAddress,
        prisma,
      });

      next();

      return res.status(200).json({ user, tx: txId });
    } catch (e) {
      log.error(e);
      return res.status(500).send({
        ERROR: true,
        MESSAGE: "INTERNAL SERVER ERROR: " + e,
      });
    }
  });
  return {
    path: "/api",
    router,
  };
};
