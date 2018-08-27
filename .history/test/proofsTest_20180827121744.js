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
            id: r[0].toNumber(),
            title: r[1],
            assert.equal(res[0].toNumber(), 0, "returned correct id for created proof"
            assert.equal(res[1], "test", "returned correct title")
        });
    });
  });

  it("should retrieve the number of proofs");

  it("should get a single proof");
});
