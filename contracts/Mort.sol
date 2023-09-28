// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MORT is ERC20 {

    // this function mints 50 morts tokens during deployments
    constructor() ERC20("MORTALITY Token", "MOT") {
        _mint(msg.sender, 50 * 10 ** decimals());
    }
    
    // this function mint tokens to any address that call this function
    function mint(uint256 _amount) public {
        _mint(msg.sender, _amount * 50 ** decimals());
    }

     // this function is to transfer tokens to any address   
    function transfer(address _to, uint256 _amount) public override returns (bool) {
        _transfer(msg.sender, _to, _amount * 10 ** decimals());
        return true;
    }

    // the burn function typically demolishes tokens after it has been swapped or exchanged for other tokens
    function burn(uint256 _amount) public {
        _burn(msg.sender, _amount * 10 ** decimals());
    }
}