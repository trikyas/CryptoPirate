pragma solidity ^0.4.2;

contract CryptoPirateToken {
  string public name = "CryptoPirate";
  string public symbol = "CPT";
  string public standard = "CryptoPirate v1.0";
  uint256 public totalSupply;
// Map for Keys and Values
  mapping(address => uint256) public balanceOf;

  function CryptoPirateToken (uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
  }
  
}
