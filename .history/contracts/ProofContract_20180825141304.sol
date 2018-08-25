pragma solidity ^0.4.18;

contract ProofContract {

    address public owner; 

    mapping(address => Proof) public proofsByCreator; 

    //TODO; IPFS thing for pics and maybe vids
    struct Proof {
        uint id; 
        address creator; 
        string title; 
        string descriptionl
        string image;
        string[] tags; 
    }

    //events
    event getProofsByCreator(address creator);
    event createProof("Proof Created");
    event deleteProof("Proof Deleted");
    
    constructor() public {
        owner = msg.sender; 
    }

    function getProofs(address creator) returns (Proof[]) {
        //how to return an array in solidity?
        return proofsByCreator[msg.sender];
    }

    function createProof() public returns (Proof) {

    }

    function deleteProof() {

    }

    //function edit proof

}