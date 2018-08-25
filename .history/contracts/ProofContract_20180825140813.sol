pragma solidity ^0.4.18;

contract ProofContract {

    address public owner; 

    mapping(uint => Proof) public proofs; 

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
    


    function getProofs(address creator) returns (Proof[]) {

    }

    function createProof() public returns (Proof) {

    }

    function deleteProof() {

    }

    //function edit proof

}