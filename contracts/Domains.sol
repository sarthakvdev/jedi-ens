// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Domains {
  constructor() {
    console.log("This is my Domain's contract. Very nice.");
  }

  mapping (string => address) public domains;
  mapping (string => string) public records;

  function register(string calldata name) public {
    domains[name] = msg.sender;
    console.log("%s has registered a domain!", msg.sender);
  }

  function getAddress(string calldata name) public view returns (address) {
    return domains[name];
  }

  function setRecord(string calldata name, string calldata record) public {
    require(domains[name] == msg.sender);
    records[name] = record;
  }

  function getRecord(string calldata name) public view returns(string memory) {
    return records[name];
  }
}