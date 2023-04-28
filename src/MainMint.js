import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { abi } from "./constants";

const contractAddress = "0x8a3A3922E92FDACc0491d98f78D2B13a8DbDeeC8";

const MaintMint = ({ accounts, setAccounts }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [course, setCourse] = useState("")

  const isConnected = Boolean(accounts[0]);

  async function apply() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        abi,
        signer
      );
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        const users = await contract.Users(accounts.toString())
        const hasApplied = users.hasApplied
        if (hasApplied === true){
          alert("User has already applied")
          return
        }
        const response = await contract.applyForCertificate(name, age, course);
        await response.wait()
        console.log("response: ", response);
        alert("Applied!");
      } catch (err) {
        console.log("error: ", err);
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
            Student Portal
          </Text>
        </div>

        {isConnected ? (
          <div>
            Enter Your name and age
            <Flex justify="center" align="center">
name
              <Input
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type = "text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              age
              <Input
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type="number"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />

Course
              <Input
                fontFamily="inherit"
                width="100px"
                height="40px"
                textAlign="center"
                paddingLeft="19px"
                marginTop="10px"
                type = "text"
                value={course}
                onChange={(event) => setCourse(event.target.value)}
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
              onClick={apply}
            >
              Apply
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
            Connect your wallet to Apply.
          </Text>
        )}
      </Box>
    </Flex>
  );
};
export default MaintMint;
