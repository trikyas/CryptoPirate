pragma solidity ^0.4.2;

import "./CryptoPirateToken.sol";

contract CryptoPirateTokenSale {
  address admin;
  CryptoPirateToken public tokenContract;
  uint256 public tokenPrice;
  uint256 public tokensSold;
  event Sell(address _buyer, uint256 _amount);

  function CryptoPirateTokenSale(CryptoPirateToken _tokenContract, uint256 _tokenPrice) public {
    admin = msg.sender;
    tokenContract = _tokenContract;
    tokenPrice = _tokenPrice;
  }
// Using DSMath for handling 'multiply' because I suck at Math.
//  https://github.com/dapphub/ds-math/blob/master/src/math.sol

// NOTE: 'pure' does not write to the Blockchain!
  function multiply(uint x, uint y) internal pure returns (uint z) {
    require(y == 0 || (z = x * y) / y == x);
  }
  function buyTokens(uint256 _numberOfTokens) public payable {
    require(msg.value == multiply(_numberOfTokens, tokenPrice));
    require(tokenContract.balanceOf(this) >= _numberOfTokens);
    require(tokenContract.transfer(msg.sender, _numberOfTokens));
    tokensSold += _numberOfTokens;
    Sell(msg.sender, _numberOfTokens);
  }
  function endSale() public {
    require(msg.sender == admin);
    require(tokenContract.transfer(admin, tokenContract.balanceOf(this)));
    // selfdestruct(admin);
    // NOTE: Let's not destroy the contract here
    // Just transfer the balance to the admin
    admin.transfer(address(this).balance);
  }
}
