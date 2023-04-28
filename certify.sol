//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract certification {

    struct student {
        string name;
        uint256 age;
        string course;
        string institute;
        uint256 issuedOn;
        bool generated;
        bool isApproved;
        bool hasApplied;
    }

    address public admin = 0xe7dDc14E227B04637154c43E568F481A6Df13763;

    mapping(address => student) public Users;

    function applyForCertificate(string memory _name, uint256 _age, string memory _course) public {
      Users[msg.sender].name = _name;
      Users[msg.sender].age = _age;
      Users[msg.sender].institute = "Birmingham University";
      Users[msg.sender].course = _course;
      Users[msg.sender].hasApplied = true;
    }

    function verifyStudent(address _student) public {
      require(msg.sender == admin, "only admin can verify");
      require(Users[_student].hasApplied == true,"student has not applied");
      Users[_student].isApproved = true;
    }

    function generateCertificate() public {
        require(Users[msg.sender].isApproved == true, "User has not been approved");
        Users[msg.sender].issuedOn = block.timestamp;
        Users[msg.sender].generated = true;
    }
}
