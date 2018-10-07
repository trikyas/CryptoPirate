var PirateToken = artifacts.require("./PirateToken.sol");

module.exports = function(deployer) {
  deployer.deploy(PirateToken);
};
