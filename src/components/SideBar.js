import { background, Box, Heading, HStack, Image, Stack,Text } from '@chakra-ui/react'

import React from 'react'

const SideBar = () => {
    const navLinks=[{
        icon: '/images/Dashboard.png',
        text: 'Dashboard',
    },
    {
        icon: '/images/Transactions.png',
        text: 'Transactions',
    },
]
  return (
    <Stack bg='white' justifyContent='space-between' w={{base:'full', lg:'256px'}} h='100vh' boxShadow={{ base: 'none', lg: 'lg'}} >
        <Box>
            
            <Heading as='h1' fontSize='20px' textColor='#5F00D9' textAlign='center' pt='56px'>@DoSomeCoding</Heading>
            <Box mx='3' mt='6'  >
                {navLinks.map((val,ind)=>(
                    <HStack key={ind} mx='12px' px='4' py='3' color='#797E82' borderRadius='10px' 
                    _hover={
                        {
                            background:'#F3F3F7',
                            color:'#171717',
                            fontSize:'bold',       
                        }}>
                        <Image color='#797E82' src={val.icon}></Image>
                        <Text fontSize='14px' fontWeight='medium'>{val.text}</Text>
                    </HStack>
                ))}   
            </Box>
        </Box>
        <Box mx='3' mb="6"  >
                <HStack  mx='12px' px='4' py='3' color='#797E82' borderRadius='10px' 
                _hover={
                     {
                        background:'#F3F3F7',
                        color:'#171717',
                        fontSize:'bold',       
                     }}
                >
                    <Image src='/images/Help.png'></Image>
                    <Text fontSize='14px' fontWeight='medium'>Support</Text>
                </HStack>   
        </Box>
        
        
      
    </Stack>
  )
}

export default SideBar

