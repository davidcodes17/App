import { Box, Flex, Heading,Switch, Text, RadioGroup, Radio, Button } from '@chakra-ui/react'

const Settings = () => {
  return (
    <Box mt={4}>
        <Heading fontWeight={200}>Settings</Heading>
        <Box>
            <Flex alignItems={'center'} justifyContent={'space-between'} py={5}>
                <Text fontSize={20}>Modes</Text>
                <Switch colorScheme="red" />
            </Flex>
            <Flex alignItems={'center'} gap={20} py={5}>
                <Text fontSize={20}>Font Family</Text>
               <RadioGroup >
                    <Radio ></Radio>
                    <Radio name='font' pl={10}>Augumentaum Sans</Radio>
                    <Radio name='font' pl={10}>Poppins</Radio>
                    <Radio name='font' pl={10}>Default</Radio>
               </RadioGroup>
            </Flex>

            <Flex alignItems={'center'} justifyContent={'space-between'} py={5}>
                <Text fontSize={20}>Reset Appliaction</Text>
                <Button bg={'darkorchid'} color={'white'}>Reset App</Button>
            </Flex>

            <Box>
                <Text fontSize={20} color={'gray'}>All Rights Reserverd Copyright @DC</Text>
            </Box>
        </Box>

    </Box>
  )
}

export default Settings