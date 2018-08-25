pragma solidity ^0.4.18;

contract Proofs {

    address public owner; 

    uint proofCount; 

    mapping(uint => Proof) public proofs; 
    mapping(address => Proof) public proofsByCreator; 

    //TODO; IPFS thing for pics and maybe vids
    struct Proof {
        uint indexed id; 
        address creator; 
        string title; 
        string descriptionl
        string image;
        string[] tags; 
    }

    //events
    event getProofsByCreator(address creator);
    event proofCreated(uint id);
    event deleteProof("Proof Deleted");

    //modifiers 
    //modifier isCreator()

    constructor() public {
        owner = msg.sender; 
        proofCount = 0; 
    }

    // Clarification -> do we get all of OUR proofs at the start of the app? or load the json dummy data...

    // function getProofs(address creator) returns (Proof[]) {
    //     //how to return an array in solidity? apparently cannot do...
    //     return proofsByCreator[msg.sender];
    // }

    function createProof(string title, string description, string image, string[] tags) public returns (Proof) {
        proofCount += 1; 
        proofs[proofCount] = Proof({id: proofCount, address: msg.sender, title: title, description: description, image: image, tags: tags });
        emit ProofCreated
        return proofs[proofCount];
    }

    // function deleteProof() isCreator() public  {
    // }

    //function edit proof

}