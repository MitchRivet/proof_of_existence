pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2;

contract Proofs {

    address public owner; 

    uint proofCount; 

    mapping(uint => Proof) public proofs; 
    mapping(address => Proof) public proofsByCreator; 

    //TODO; IPFS thing for pics and maybe vids
    struct Proof {
        uint id; 
        address creator; 
        string title; 
        string description;
        string image;
        string[] tags; 
    }

    //events
    event getProofsByCreator(address creator);
    event ProofCreated(uint id);
    event deleteProof(uint id);

    //modifiers 
    //modifier isCreator()

    constructor() public {
        owner = msg.sender; 
        proofCount = 0; 
    }

    // Clarification -> do we get all of OUR proofs at the start of the app? or load the json dummy data...

    function getProofs(address creator) returns (Proof[]) {
        //how to return an array in solidity? apparently cannot do...
        return proofsByCreator[msg.sender];
    }

    function createProof(string title, string description, string image, string[] tags) public returns (Proof) {
        proofCount += 1; 
        proofs[proofCount] = Proof({id: proofCount, creator: msg.sender, title: title, description: description, image: image, tags: tags });
        emit ProofCreated(proofCount);
        return proofs[proofCount];
    }

    // function deleteProof() isCreator() public  {
    // }

    //function edit proof

}