pragma solidity ^0.4.2;

contract PirateToken {
  // Constructor
  // Set Number of Tokens
  // Read total of Tokens
  uint256 public totalSupply;

  function PirateToken () public {
    totalSupply = 1000000;
  }
}
