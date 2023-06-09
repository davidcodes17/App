import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Details = (props) => {
  return (
    <Box mt={4}>
        <Flex gap={10}  >
            <Text>{props.id}</Text>
            <Text>{props.firstname}</Text>
            <Text>{props.lastname}</Text>
            <Text>{props.email}</Text>
            <Text>{props.phone}</Text>
            <Text>{props.accountDetails}</Text>
            <Text>{props.signedSalary}</Text>
        </Flex>
    </Box>
  )
}

export default Details