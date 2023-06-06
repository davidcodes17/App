import { Box, Flex, Text } from '@chakra-ui/react'
import { Category2, Component } from 'iconsax-react'
import React from 'react'

const NavTemplate = (props) => {
  return (
        <Box mx={4}>
            <Flex alignItems={'center'} gap={2} m={'13px 0px'} borderRadius={10} color={'black  '} px={5} py={2.5} bg={'white'} cursor={'pointer'} className='active'>
                {props.icon}
                <Text fontSize={16} color={'black'} className='name'>{props.name}</Text>
            </Flex>
        </Box>
  )
}

export default NavTemplate