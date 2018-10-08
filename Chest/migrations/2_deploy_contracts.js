var CryptoPirateToken = artifacts.require("./CryptoPirateToken.sol");
var CryptoPirateTokenSale = artifacts.require("./CryptoPirateTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(CryptoPirateToken, 1000000).then(function() {
    var tokenPrice = 1000000000000000;  // Token price is 0.001 Ether
    return deployer.deploy(CryptoPirateTokenSale, CryptoPirateToken.address, tokenPrice);
  });

};
