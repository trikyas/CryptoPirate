var CryptoPirateToken = artifacts.require("./CryptoPirateToken.sol");
var CryptoPirateTokenSale = artifacts.require("./CryptoPirateTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(CryptoPirateToken, 1000000).then(function() {
    return deployer.deploy(CryptoPirateTokenSale, CryptoPirateToken.address);
  });

};
