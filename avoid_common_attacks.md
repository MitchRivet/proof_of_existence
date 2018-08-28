# Avoiding Common Attacks 

Honestly I did not do much here by way of security. Since the idea revolves around proving something exists/happened, I made all of the contract data public. 

I did incorporate an emergency stop which the owner of the contract can call (this was a simple implementation of Pausabile from open zeppelin).

As far as other data vulnerabilities, the total array of 'Proofs' is dynamic, so the MIGHT be an issue for large amounts of data (I have yet to test this, but I would like to see what happens when I initialize the contract with a large number of Proofs). 

I may want to convert some of my strings to fixed bytes, because it could cost a lot of gas if a user inputs a very large string.