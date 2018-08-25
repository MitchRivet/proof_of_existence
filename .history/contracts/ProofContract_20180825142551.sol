pragma solidity ^0.4.18;

contract Proofs {

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

    //modifiers 
    modifier isCreator()
    
    constructor() public {
        owner = msg.sender; 
    }

    function getProofs(address creator) returns (Proof[]) {
        //how to return an array in solidity?
        return proofsByCreator[msg.sender];
    }

    function createProof(uint id, string title, ...) public returns (Proof) {
        proofs[id] = Proof({id: id, title: title, ...});
    }

    function deleteProof() isCreator() public  {

    }

    //function edit proof

}