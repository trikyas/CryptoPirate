var CryptoPirateToken = artifacts.require("./CryptoPirateToken.sol");

contract('CryptoPirateToken', function(accounts) {
  var tokenInstance;
  it('intializes the contract with the correct values', function() {
    return CryptoPirateToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name) {
      assert.equal(name, 'CryptoPirate', 'has correct name');
      return tokenInstance.symbol();
    }).then(function(symbol) {
      assert.equal(symbol, 'CPT', 'has correct symbol');
      return tokenInstance.standard();
    }).then(function(standard) {
      assert.equal(standard, 'CryptoPirate v1.0', 'has correct standard');
    });
  })
  it('allocates the initial supply upon deployment', function() {
    return CryptoPirateToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance) {
      assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account');
    });
  });
});
it('transfers token ownership', function() {
  return CryptoPirateToken.deployed().then(function(instance) {
    tokenInstance = instance;
    return tokenInstance.transfer.call(accounts[1], 999999999999999999999);
  }).then(assert.fail).catch(function(error) {
    assert(error.message.indexOf('revert') >= 0, 'error message must contain revert');
    return tokenInstance.transfer(accounts[1], 250000, { from: accounts[0] });
  }).then(function(receipt) {
    return tokenInstance.balanceOf(accounts[1]);
  }).then(function(balance) {
    assert.equal(balance.toNumber(), 250000, 'adds the amount to the recieving account');
    return tokenInstance.balanceOf(accounts[0]);
  }).then(function(balance) {
    assert.equal(balance.toNumber(), 750000, 'deducts amount from account');
  });
});
