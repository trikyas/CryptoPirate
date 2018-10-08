pragma solidity ^0.4.2;

import "./CryptoPirateToken.sol";

contract CryptoPirateTokenSale {
  address admin;
  CryptoPirateToken public tokenContract;
  uint256 public tokenPrice;

  function CryptoPirateTokenSale(CryptoPirateToken _tokenContract, uint256 _tokenPrice) public {
    admin = msg.sender;
    tokenContract = _tokenContract;
    tokenPrice = _tokenPrice;
  }
}
