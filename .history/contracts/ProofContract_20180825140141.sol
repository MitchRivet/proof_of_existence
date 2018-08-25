pragma solidity ^0.4.18;

contract ProofContract {

    address public owner; 

    //TODO; IPFS thing for pics and maybe vids
    struct Proof {
        address creator; 
        string title; 
        string descriptionl
        string image;
        string[] tags; 
    }
}