# Design Pattern Decisions

This was my first go at a dapp. My smart contract isn't particularly complex, since I'm mostly using the block chain to store data (and not really to transact much between users). 

I spent a lot of time dealing with some of the limitations of Solidity. This would've been useful to delve into more inside the course. For example, I initially wanted to use a function called getProofs() returns(Proofs[]) (you can't return an array of structs in solidity).

Overall, this project is just storing a list of items so the implementation is fairly straightforward. IPFS was also surprisingly easy to use from the javascript side, so that was not much of an issue either.


I found these resources to be very helpful for solidity specific questions: https://ethereum.stackexchange.com/questions/13167/are-there-well-solved-and-simple-storage-patterns-for-solidity
https://medium.com/@robhitchens/solidity-crud-part-1-824ffa69509a

