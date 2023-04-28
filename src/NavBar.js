import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';


const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
        setAccounts(accounts);
        }
    }

    return(
        
        <Flex justify="space-between" align="center" padding="30px">
             <Flex justify="space-around" width="40%" padding="75px">

             </Flex>
            
            {/*Right Side - Sections and Connect*/}
            <Flex justify="space-between" align="center" padding="30px">
            <Box margin="0 15px"> <a href="/student"> Student Page </a> </Box>
            <Spacer />
            <Box margin="0 15px"><a href="/admin"> Admin Page </a></Box>
            <Spacer />      
            <Box margin="0 15px"><a href="/generate"> Certificate</a></Box>
            <Spacer />
      

            {/*Connect*/}
            { isConnected ? (
                <Box margin="0 15px">Connected</Box>
            ) : (
                <Button 
                backgroundColor="#008fd4"
                borderRadius="15px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Connect</Button>
            ) }
        </Flex>
</Flex>


    );
};

export default NavBar;