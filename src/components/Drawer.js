import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
   
  } from '@chakra-ui/react'
import SideBar from './SideBar'

  export default function DrawerPage({isOpen, onClose}) {
    
    return (
      <>       
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose} 
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
               <SideBar/>
            </DrawerBody> 
          </DrawerContent>
        </Drawer>
      </>
    )
  }