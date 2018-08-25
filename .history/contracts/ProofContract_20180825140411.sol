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

    


    function getProofs()
    function createProof()
    function deleteProof()

    //function edit proof

}