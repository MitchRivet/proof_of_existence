pragma solidity ^0.4.24;

//usage of an external library
import 'openzeppelin-solidity/contracts/lifecycle/Pausable.sol'; 
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

/** @title Proof Contract. */
contract Proofs is Ownable, Pausable {

    address public owner; 
    uint public lastProofId; 

    Proof[] public proofs; 

    //emergency stop implementation
    modifier whenNotPaused() { 
        require(!paused); 
        _;
    }

    //TODO; IPFS thing for pics and maybe vids
    struct Proof {
        uint id; 
        address creator; 
        string title; 
        string description;
        string image;
    }

    //events
    event FetchProofById(uint id);
    event ProofCreated(uint id);
    event GetProofCount(uint total);
    
    //TODO
    //event deleteProof(uint id);

    constructor() public {
        //whoever instantiates the contract
        owner = msg.sender; 
        lastProofId = proofs.length; 
    }

    // was previously attempting to return a struct array, but that is not doable in solidity 
    // is there a possible better work around to return a list of things? 
    //rather than looping through and getting them individually...
    function getProof(uint id) public constant whenNotPaused returns (uint, string, string, string) {
        emit FetchProofById(id);
        return (proofs[id].id, proofs[id].title, proofs[id].description, proofs[id].image);
    }

    //issues when returning uint[]... docs say you can w/ web3?        
    function getProofCount() public constant whenNotPaused returns (uint) {
        emit GetProofCount(lastProofId);
        return lastProofId;
    }

    function createProof(string title, string description, string image) public whenNotPaused {
        Proof memory newProof = Proof({id: lastProofId, creator: msg.sender, title: title, description: description, image: image});
        proofs[lastProofId] = newProof;
        lastProofId++;
        emit ProofCreated(lastProofId);
    }

}