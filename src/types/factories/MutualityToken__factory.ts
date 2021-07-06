/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MutualityToken, MutualityTokenInterface } from "../MutualityToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611bc9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636057361d1161008c578063a457c2d711610066578063a457c2d714610261578063a9059cbb14610291578063dd62ed3e146102c1578063fe4b84df146102f1576100ea565b80636057361d146101f757806370a082311461021357806395d89b4114610243576100ea565b806323b872dd116100c857806323b872dd1461015b5780632e64cec11461018b578063313ce567146101a957806339509351146101c7576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f761030d565b604051610104919061157d565b60405180910390f35b6101276004803603810190610122919061135c565b61039f565b6040516101349190611562565b60405180910390f35b6101456103bd565b60405161015291906116bf565b60405180910390f35b6101756004803603810190610170919061130d565b6103c7565b6040516101829190611562565b60405180910390f35b6101936104c8565b6040516101a091906116bf565b60405180910390f35b6101b16104d2565b6040516101be91906116da565b60405180910390f35b6101e160048036038101906101dc919061135c565b6104db565b6040516101ee9190611562565b60405180910390f35b610211600480360381019061020c9190611398565b610587565b005b61022d600480360381019061022891906112a8565b610591565b60405161023a91906116bf565b60405180910390f35b61024b6105da565b604051610258919061157d565b60405180910390f35b61027b6004803603810190610276919061135c565b61066c565b6040516102889190611562565b60405180910390f35b6102ab60048036038101906102a6919061135c565b610760565b6040516102b89190611562565b60405180910390f35b6102db60048036038101906102d691906112d1565b61077e565b6040516102e891906116bf565b60405180910390f35b61030b60048036038101906103069190611398565b610805565b005b60606036805461031c90611823565b80601f016020809104026020016040519081016040528092919081815260200182805461034890611823565b80156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b5050505050905090565b60006103b36103ac61095d565b8484610965565b6001905092915050565b6000603554905090565b60006103d4848484610b30565b6000603460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061041f61095d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561049f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104969061161f565b60405180910390fd5b6104bc856104ab61095d565b85846104b79190611767565b610965565b60019150509392505050565b6000606554905090565b60006012905090565b600061057d6104e861095d565b8484603460006104f661095d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105789190611711565b610965565b6001905092915050565b8060658190555050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060603780546105e990611823565b80601f016020809104026020016040519081016040528092919081815260200182805461061590611823565b80156106625780601f1061063757610100808354040283529160200191610662565b820191906000526020600020905b81548152906001019060200180831161064557829003601f168201915b5050505050905090565b6000806034600061067b61095d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610738576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072f9061167f565b60405180910390fd5b61075561074361095d565b8585846107509190611767565b610965565b600191505092915050565b600061077461076d61095d565b8484610b30565b6001905092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600060019054906101000a900460ff168061082b575060008054906101000a900460ff16155b61086a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610861906115ff565b60405180910390fd5b60008060019054906101000a900460ff1615905080156108ba576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b61092e6040518060400160405280600981526020017f4d757475616c69747900000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f4d75000000000000000000000000000000000000000000000000000000000000815250610db2565b6109383383610e9f565b80156109595760008060016101000a81548160ff0219169083151502179055505b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109cc9061165f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3c906115bf565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b2391906116bf565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ba0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b979061163f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c079061159f565b60405180910390fd5b610c1b838383610ff4565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ca2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c99906115df565b60405180910390fd5b8181610cae9190611767565b603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d409190611711565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610da491906116bf565b60405180910390a350505050565b600060019054906101000a900460ff1680610dd8575060008054906101000a900460ff16155b610e17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0e906115ff565b60405180910390fd5b60008060019054906101000a900460ff161590508015610e67576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610e6f610ff9565b610e7983836110d2565b8015610e9a5760008060016101000a81548160ff0219169083151502179055505b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f069061169f565b60405180910390fd5b610f1b60008383610ff4565b8060356000828254610f2d9190611711565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f839190611711565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fe891906116bf565b60405180910390a35050565b505050565b600060019054906101000a900460ff168061101f575060008054906101000a900460ff16155b61105e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611055906115ff565b60405180910390fd5b60008060019054906101000a900460ff1615905080156110ae576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156110cf5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff16806110f8575060008054906101000a900460ff16155b611137576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112e906115ff565b60405180910390fd5b60008060019054906101000a900460ff161590508015611187576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b826036908051906020019061119d9291906111db565b5081603790805190602001906111b49291906111db565b5080156111d65760008060016101000a81548160ff0219169083151502179055505b505050565b8280546111e790611823565b90600052602060002090601f0160209004810192826112095760008555611250565b82601f1061122257805160ff1916838001178555611250565b82800160010185558215611250579182015b8281111561124f578251825591602001919060010190611234565b5b50905061125d9190611261565b5090565b5b8082111561127a576000816000905550600101611262565b5090565b60008135905061128d81611b65565b92915050565b6000813590506112a281611b7c565b92915050565b6000602082840312156112ba57600080fd5b60006112c88482850161127e565b91505092915050565b600080604083850312156112e457600080fd5b60006112f28582860161127e565b92505060206113038582860161127e565b9150509250929050565b60008060006060848603121561132257600080fd5b60006113308682870161127e565b93505060206113418682870161127e565b925050604061135286828701611293565b9150509250925092565b6000806040838503121561136f57600080fd5b600061137d8582860161127e565b925050602061138e85828601611293565b9150509250929050565b6000602082840312156113aa57600080fd5b60006113b884828501611293565b91505092915050565b6113ca816117ad565b82525050565b60006113db826116f5565b6113e58185611700565b93506113f58185602086016117f0565b6113fe816118b3565b840191505092915050565b6000611416602383611700565b9150611421826118c4565b604082019050919050565b6000611439602283611700565b915061144482611913565b604082019050919050565b600061145c602683611700565b915061146782611962565b604082019050919050565b600061147f602e83611700565b915061148a826119b1565b604082019050919050565b60006114a2602883611700565b91506114ad82611a00565b604082019050919050565b60006114c5602583611700565b91506114d082611a4f565b604082019050919050565b60006114e8602483611700565b91506114f382611a9e565b604082019050919050565b600061150b602583611700565b915061151682611aed565b604082019050919050565b600061152e601f83611700565b915061153982611b3c565b602082019050919050565b61154d816117d9565b82525050565b61155c816117e3565b82525050565b600060208201905061157760008301846113c1565b92915050565b6000602082019050818103600083015261159781846113d0565b905092915050565b600060208201905081810360008301526115b881611409565b9050919050565b600060208201905081810360008301526115d88161142c565b9050919050565b600060208201905081810360008301526115f88161144f565b9050919050565b6000602082019050818103600083015261161881611472565b9050919050565b6000602082019050818103600083015261163881611495565b9050919050565b60006020820190508181036000830152611658816114b8565b9050919050565b60006020820190508181036000830152611678816114db565b9050919050565b60006020820190508181036000830152611698816114fe565b9050919050565b600060208201905081810360008301526116b881611521565b9050919050565b60006020820190506116d46000830184611544565b92915050565b60006020820190506116ef6000830184611553565b92915050565b600081519050919050565b600082825260208201905092915050565b600061171c826117d9565b9150611727836117d9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561175c5761175b611855565b5b828201905092915050565b6000611772826117d9565b915061177d836117d9565b9250828210156117905761178f611855565b5b828203905092915050565b60006117a6826117b9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561180e5780820151818401526020810190506117f3565b8381111561181d576000848401525b50505050565b6000600282049050600182168061183b57607f821691505b6020821081141561184f5761184e611884565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611b6e8161179b565b8114611b7957600080fd5b50565b611b85816117d9565b8114611b9057600080fd5b5056fea264697066735822122036428ba1ec63e42ec4e0d720140158eeed702b7c5a452fb8f0f2f87461b0e07664736f6c63430008020033";

export class MutualityToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<MutualityToken> {
    return super.deploy(overrides || {}) as Promise<MutualityToken>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MutualityToken {
    return super.attach(address) as MutualityToken;
  }
  connect(signer: Signer): MutualityToken__factory {
    return super.connect(signer) as MutualityToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MutualityTokenInterface {
    return new utils.Interface(_abi) as MutualityTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MutualityToken {
    return new Contract(address, _abi, signerOrProvider) as MutualityToken;
  }
}
