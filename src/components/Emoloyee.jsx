import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { SearchNormal } from 'iconsax-react'
import React from 'react'

const Emoloyee = () => {
  return (
    <Box mt={5} mb={4}>
        <Heading fontSize={25} fontWeight={500}>Employees</Heading>
        <Flex borderRadius={10} pt={5}>
            <Input type='text' py={2} px={4} width={250} borderLeftRadius={10} placeholder='Search' />
            <Button gap={2} px={2} bg={'darkorchid'} borderRightRadius={10} color={'white'}>
                <SearchNormal size={20} />
            </Button>
        </Flex>
    </Box>
  )
}

export default Emoloyee