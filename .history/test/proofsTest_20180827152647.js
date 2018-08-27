var Proofs = artifacts.require("./Proofs.sol");

contract("Proofs", function(accounts) {

  it("should create and fetch a the correct title", function() {
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

  it("should create and fetch correct description", function() {
    return Proofs.deployed().then(function(instance) {
      var proofsInstance = instance;
      return proofsInstance
        .createProof("test 2", "a test proof", "image hash")
        .then(function(res) {
          return proofsInstance.getProof(1);
        })
        .then(function(res) {
          assert.equal(res[2], "a test proof", "returned correct description");
        });
    });
  });

  it("should create and fetch correct description", function() {
    return Proofs.deployed().then(function(instance) {
      var proofsInstance = instance;
      return proofsInstance
        .createProof("test 3", "a test proof", "image hash")
        .then(function(res) {
          return proofsInstance.getProof(2);
        })
        .then(function(res) {
          assert.equal(res[3], "image hash", "returned correct image hash");
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
          assert.equal(res.toNumber(), 6, "counted 6 created proofs (what we've created at this point)");
        });
    });
  });
});
