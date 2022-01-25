// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;
    event UpdatedCount(uint256 count);

    function get() public view returns (uint256) {
        return count;
    }

    function inc() public {
        count += 1;
        emit UpdatedCount(count);
    }

    function dec() public {
        count -= 1;
        emit UpdatedCount(count);
    }
}
