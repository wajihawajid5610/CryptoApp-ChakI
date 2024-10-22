import {  Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineUpgrade } from "react-icons/md";
import { TbArrowBarToDown } from "react-icons/tb";


const Portfolio = () => {
  return (
      
            <HStack h='106px' justifyContent='space-between' px='4' >
                <HStack>
                    <Stack> 
                        <HStack>
                            <Text>Total Portfolio Value </Text>    
                        </HStack> 
                        <Text>₹ 112,312.24</Text>   
                    </Stack>

                    <Stack> 
                            <Text>Wallet Balance</Text>
                            <HStack>
                                <Text>22.39401000</Text>
                                <label>BTC</label>
                            </HStack>   
                    </Stack>

                    <Stack> 
                        <HStack>
                            <Text>₹ 1,300.00</Text>
                            <label>INR</label>
                        </HStack>    
                    </Stack>
                </HStack>

                    <HStack> 
                        <Button><MdOutlineUpgrade />Deposit</Button>
                        <Button><TbArrowBarToDown />Withdraw</Button>    
                    </HStack>
            </HStack>
     
  )
}

export default Portfolio
