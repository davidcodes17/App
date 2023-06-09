import { Box, Flex, Text } from '@chakra-ui/react'
import { Category2, Component } from 'iconsax-react'
import React from 'react'
import { motion } from 'framer-motion'
const NavTemplate = (props) => {
  const anim = {
    in:{
      background:"darkorange"
    }
  }
  return (
        <Box mx={4} >
            <Flex alignItems={'center'} gap={2} my={'7px'}  borderRadius={10} color={'black  '} px={5} py={'10px'} cursor={'pointer'} className='active'>
                {props.icon}
                <Text fontSize={15} color={'black'}  className='name'>{props.name}</Text>
            </Flex>
        </Box>
  )
}

export default NavTemplate