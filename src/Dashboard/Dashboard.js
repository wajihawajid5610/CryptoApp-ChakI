import { Box } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Portfolio from '../components/Portfolio'


const Dashboard = () => {
  return (
    <Box>
      <DashboardLayout title='Dashboard'>
      <Box  borderRadius='xl'  bg='white' mx='auto'>
        <Portfolio/>
      </Box>
      </DashboardLayout>
    </Box>
  )
}

export default Dashboard
