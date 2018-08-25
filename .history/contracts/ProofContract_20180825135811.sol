pragma solidity ^0.4.18;

contract ProofContract {

    address public owner; 


    struct Proof {
        address creator; 
        string title; 
        string image;
        string[] tags; 

    }
}