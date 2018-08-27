pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2;

contract Proofs {

    address public owner; 

    uint proofCount; 
    uint testProof;

    mapping(uint => Proof) public proofs; 
    mapping(address => Proof) public proofsByCreator; 

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
        //owner = msg.sender; 
        proofCount = 0; 
    }
    // Clarification -> do we get all of OUR proofs at the start of the app? or load the json dummy data...
    function getProof(uint id) public view returns (Proof) {
        return (proofs[id].title, proofs[id].description);
    }

    // function getProofs(address creator) returns (Proof[]) {
    //     //how to return an array in solidity? apparently cannot do...
    //     return proofsByCreator[msg.sender];
    // }

    function createProof(string title, string description, string image) public  {
        
        proofs[proofCount] = Proof({id: proofCount, creator: msg.sender, title: title, description: description, image: image});
        proofCount += 1; 
        emit ProofCreated(proofCount);
        // return proofs[proofCount];
    }


    // function createProof(uint x) public {
    //      testProof = x;
    // }

    function get() public view returns (uint) {
        return testProof;
    }
    // function deleteProof() isCreator() public  {
    // }

    //function edit proof

}