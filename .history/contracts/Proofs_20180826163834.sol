pragma solidity ^0.4.18;

contract Proofs {

    address public owner; 

    uint lastProofId; 

    mapping(uint => Proof) public proofs; 
    uint[] proofIds; 

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
        lastProofId = 0; 
    }
    // Clarification -> do we get all of OUR proofs at the start of the app? or load the json dummy data...
    function getProof(uint id) public constant returns (string, string, string) {
        return (proofs[id].title, proofs[id].description, proofs[id].image);
    }

    function createProof(string title, string description, string image) public  {
        proofs[lastProofId] = Proof({id: lastProofId, creator: msg.sender, title: title, description: description, image: image});
        proofIds.push(lastProofId);
        emit ProofCreated(lastProofId);
        lastProofId++; 
    }
        
    function getProofIds() public constant returns (uint[]){
        return proofIds;
    }
            
    // function getMyProofs() public view returns(uint[]) {
    //     for (uint i = 0; i < proofs.length; i++) {
    //         if (msg.sender == proofs[i].owner) {
    //             myProofs.push(proofs[i].id);
    //         }
    //     }
        
    //     return myProofs;
    // }

}