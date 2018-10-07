var PirateToken = artifacts.require("./PirateToken.sol");

contract('PirateToken', function(accounts) {

  it('sets the total supply upon deployment', function() {
    return PirateToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
    });
  });
})
