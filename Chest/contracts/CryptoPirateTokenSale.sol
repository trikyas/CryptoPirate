pragma solidity ^0.4.2;

import "./CryptoPirateToken.sol";

contract CryptoPirateTokenSale {
  address admin;
  CryptoPirateToken public tokenContract;

  function CryptoPirateTokenSale(CryptoPirateToken _tokenContract) public {
    admin = msg.sender;
    tokenContract = _tokenContract;
  }
}
