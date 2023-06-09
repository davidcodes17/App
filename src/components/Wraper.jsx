import { Box, Flex, Text } from '@chakra-ui/react'
import React, { Children } from 'react'
import SideBar from './SideBar'
import { ArchiveBook } from 'iconsax-react'

const Wraper = ({children}) => {
  return (
    <Flex gap={10} bg={'rgba(189, 189, 189, 0.243)'}>
          <Box p={0} bg={""}>
          {/* <Logo /> */}
          <Flex
            px={5}
            py={4}
            color={"black"}
            gap={3}
            fontWeight={"bolder"}
            alignItems={"center"}
          >
            <ArchiveBook variant="Bold" size={40} />{" "}
            <Text fontSize={23}>Employee MGT</Text>
          </Flex>
        <SideBar />
          
        </Box>
        {children}
    </Flex>
  )
}

export default Wraper