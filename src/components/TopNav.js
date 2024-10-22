import { Box, Heading, HStack, Icon, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const TopNav = ({title,onOpen}) => {
  return (
   
    <Box  px='4' bg='white'>
      <HStack h='64px' maxW='1100px' justify='space-between' mx='auto'>
        <Icon as={GiHamburgerMenu}
        display={{
          base: 'block',
          md: 'none'
        }}
        onClick={onOpen}
        />
        <Heading fontSize='28px' fontWeight='medium' color='#171717' > {title}</Heading>
        <Menu>
           <MenuButton>
            <Image src='/images/Group .png'></Image>
           </MenuButton>
           <MenuList>
                <MenuItem>Support</MenuItem>
                <MenuItem>Logout</MenuItem>
           </MenuList>
        </Menu>
      </HStack>
    </Box>
  )
}

export default TopNav
