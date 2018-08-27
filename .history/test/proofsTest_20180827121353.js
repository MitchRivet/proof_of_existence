var Proofs = artifacts.require('./Proofs.sol')

contract('Proofs', function(accounts) {
    it("should create and fetch a new proof", function () {
        return Proofs.deployed().then(function(instance) {
            var 
            return instance.createProof("test", "a test proof", "image hash").then(function(res) {
                return instance
            })
        })
    })

    it("should retrieve the number of proofs")

    it("should get a single proof")

})