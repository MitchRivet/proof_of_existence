var Proofs = artifacts.require("./Proofs.sol");

contract("Proofs", function(accounts) {
  it("should create and fetch a new proof", function() {
    return Proofs.deployed().then(function(instance) {
      var proofsInstance = instance;
      return proofsInstance
        .createProof("test", "a test proof", "image hash")
        .then(function(res) {
          return proofsInstance.getProof(0);
        })
        .then(function(res) {
          assert.equal(
            res[0].toNumber(),
            0,
            "returned correct id for created proof"
          );
          assert.equal(res[1], "test", "returned correct title");
        });
    });
  });

  it("should retrieve the number of proofs", function() {
    return Proofs.deployed().then(function(instance) {
      var proofsInstance = instance;
      let promiseArray = [];
      for (var i = 0; i < 3; i++) {
        promiseArray.push(
          proofsInstance.createProof("test " + i, "a test proof", "image hash")
        );
      }
      return Promise.all(promiseArray)
        .then(function(res) {
          return proofsInstance.getProofIds.call();
        })
        .then(function(res) {
          assert.equal(res.toNumber(), 4, "counted 4 created proofs- including what we made in the first test");
        });
    });
  });
});
