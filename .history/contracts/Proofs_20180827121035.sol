pragma solidity ^0.4.24;

contract Proofs {

    address public owner; 

    uint public lastProofId; 
    uint[] public proofIds; 

    //mapping(uint => Proof) public proofs; 
    Proof[] public proofs; 

    //TODO; IPFS thing for pics and maybe vids
    struct Proof {
        uint id; 
        address creator; 
        string title; 
        string description;
        string image;
    }

    //events
    event getProofsByCreator(address creator);
    event ProofCreated(uint id);
    event deleteProof(uint id);

    //modifiers 
    //modifier isCreator()

    constructor() public {
        owner = msg.sender; 
        lastProofId = proofs.length; 
    }
    // Clarification -> do we get all of OUR proofs at the start of the app? or load the json dummy data...
    function getProof(uint id) public constant returns (uint, string, string, string) {
        return (proofs[id].id, proofs[id].title, proofs[id].description, proofs[id].image);
    }

    //issues when returning uint[]... docs say you can w/ web3?        
    function getProofIds() public constant returns (uint) {
        return lastProofId;
    }

    

    function createProof(string title, string description, string image) public {
        Proof newProof = Proof({id: lastProofId, creator: msg.sender, title: title, description: description, image: image});
        proofs.push(newProof);
        // proofIds.push(lastProofId);
        lastProofId++;
        emit ProofCreated(lastProofId);
    }

}