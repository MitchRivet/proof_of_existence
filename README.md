# Proof of Extisence Dapp

This app allows users to share proof of things that they have done. It stores 'proofs' on the block chain and uploads their photos to ipfs. On opening the app, they should see a scrolling card view of other 'proofs'. I considered making the 'proofs' only accesible by their owners, but that seemed to contradict the idea of proving something in the first place 

It should look something like this: 

![Alt text](ExampleImage.png?raw=true "Example")

## Setup
This app requires npm, ganache-cli, and metamask

1. clone the repo, navigate inside the project and install node modules
```
npm install
``` 
2. in another terminal window, start ganache-cli 
```
ganache-cli
```
3. with the neumonic returned from ganache cli, create an account with the metamask chrome extension

4. compile and migrate the Proofs.sol contract with truffle
```
truffle compile 
truffle migrate
```

5. start react 
``` 
npm run start 
```

6. Your browser should automatically open to localhost:3000 and the app should be running. The contract does not initialize with any proofs.

## Built With

* [Truffle](https://truffleframework.com/) - development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)
* [Web3](https://web3js.readthedocs.io/en/1.0/index.html) - Ethereum JavaScript API
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Solidity](https://solidity.readthedocs.io/) - contract-oriented, high-level language for implementing smart contracts


