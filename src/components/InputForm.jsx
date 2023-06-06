import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

const InputForm = (props) => {
  return (
        <Box>
            <Text mb={2}>{props.name}</Text>
            <Input border={'2px solid black'} className={props.name} px={3} py={3} borderRadius={10} placeholder={props.textPlace} />
        </Box>
  )
}

export default InputForm