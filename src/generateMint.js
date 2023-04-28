import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { abi } from "./constants";

const contractAddress = "0x8a3A3922E92FDACc0491d98f78D2B13a8DbDeeC8";

const GenMint = ({ accounts, setAccounts }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [institute, setInstitute] = useState("");
  const [time, setTime] = useState(0)
  const [course, setCourse] = useState("");
  

  const isConnected = Boolean(accounts[0]);

  async function cert() {
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
    const isApproved = users.isApproved
    if (isApproved === false){
      alert("Certificate not approved!")
      return
    }
    const isGenerated = users.generated
    if (isGenerated === true){
      alert("Certificate already generated!")
      return
    }
        const response =  await contract.generateCertificate()
        await response.wait()
        console.log("response: ", response);
        alert("Generated")
      } catch (error) {
        console.log(error)
        alert(error.message)
      }
    }
  }

  async function generate() {
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
    const isGenerated = users.generated
    if (isGenerated === false){
      alert("Certificate not generated!")
      return
    }
   setName(users.name)
   setAge(String(users.age))
   setInstitute(users.institute)
   setCourse(users.course)
    let unixTimestamp = parseInt(users.issuedOn)
      let date = new Date(unixTimestamp * 1000)
      const humanDateFormat = date.toLocaleString()

      setTime(humanDateFormat)
    
	  } catch (error){
		console.log(error)
	  }
    }
  }

  return (
    <Flex justify="center" align="center" height="80vh" paddingBottom="150px">
      <Box width="520px">
        <div>
          <Text fontSize="20px" textShadow="0 5px #000000">
            Certification Generation
          </Text>
        </div>

        {isConnected ? (
          <div>

            <Button
              backgroundColor="#008fd4"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="10"
              onClick={generate}
            >
              Details
            </Button>

            <Button
              backgroundColor="#008fd4"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              margin="10"
              onClick={cert}
            >
              Generate
            </Button>

            <Text>
                Name = {name}
                <br></br>
                <br></br>
                Age = {age}
                <br></br>
                <br></br>
                Course = {course}
                <br></br>
                <br></br>
                Institute = {institute}
                <br></br>
                <br></br>
                Issued On = {time}

            </Text>
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
            Connect your wallet to Generate.
          </Text>
        )}
      </Box>
    </Flex>
  );
};
export default GenMint;
