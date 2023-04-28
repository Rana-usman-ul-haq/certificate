import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { abi } from "./constants";

const contractAddress = "0x8a3A3922E92FDACc0491d98f78D2B13a8DbDeeC8";

const AdminMint = ({ accounts, setAccounts }) => {
  const [studentAddress, setStudentAddress] = useState("");

  const isConnected = Boolean(accounts[0]);

  async function verify() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        abi,
        signer
      );
      try {
        const users = await contract.Users(studentAddress.toString())
        const hasApplied = users.hasApplied
        if(hasApplied === false){
          alert("Student has not applied")
          return
        }
        const isApproved = users.isApproved
        if(isApproved === true){
          alert("User has been already approved")
          return
        }
        const response = await contract.verifyStudent(studentAddress)
        await response.wait()
        console.log("response: ", response);
        alert("Verified!")
      } catch (error) {
        console.log(error)
        alert(error.message)
      }
    }
  }

  return (
    <Flex justify="center" align="center" height="80vh" paddingBottom="150px">
      <Box width="520px">
        <div>
          <Text fontSize="40px" textShadow="0 5px #000000">
            Certification Centre
          </Text>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            Admin Portal
          </Text>
        </div>

        {isConnected ? (
          <div>
            Enter the studentAddress
            <Flex justify="center" align="center">
Address
              <Input
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type = "text"
                value={studentAddress}
                onChange={(event) => setStudentAddress(event.target.value)}
              />
             </Flex>

            <Button
              backgroundColor="#008fd4"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="10"
              onClick={verify}
            >
              Verify
            </Button>
          </div>
        ) : (
          <Text
            marginTop="70px"
            fontSize="30px"
            letterSpacing="5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="#008fd4"
          >
            Connect your wallet to Verify.
          </Text>
        )}
      </Box>
    </Flex>
  );
};
export default AdminMint;
