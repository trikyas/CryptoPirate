var CryptoPirateToken = artifacts.require("./CryptoPirateToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CryptoPirateToken, 1000000);
};
