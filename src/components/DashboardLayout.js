
import SideBar from '../components/SideBar'
import TopNav from '../components/TopNav'
import { Box,  Container,  Flex, useDisclosure } from '@chakra-ui/react'
import DrawerPage from './Drawer'

const DashboardLayout = ({title , children}) => {
     const {isOpen , onOpen, onClose}=useDisclosure()
  return (
       <Flex >
               <Box display={{
                    base:'none',
                    md: 'block',
               }}>
                    <SideBar/>
               </Box>
        
             <Box flexGrow={1}>
                <DrawerPage isOpen={isOpen} onClose={onClose}/>
                <TopNav title={title} onOpen={onOpen}/>
                <Container mt='6' maxW='1100px' h='90vh'>{children}</Container>
             </Box>
        </Flex> 
  )
}

export default DashboardLayout
