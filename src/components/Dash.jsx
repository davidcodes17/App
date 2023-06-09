import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { DollarCircle, People, UserCirlceAdd, UserTag, Wallet } from "iconsax-react";
import React, { useEffect, useState } from "react";

const url = "http://localhost:8080/api/users";

// const [fetchedData, setFetchedData] = useState([]);

// useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setFetchedData(data));
//   }, []);


const Dash = () => {
  return (
    <Box pt={2}>
    <Flex gap={5}>
    <Box width={'220px'} height={'110px'} className='panel'p={3} cursor={'pointer'} borderRadius={20} bg={'white'}>
        <Flex alignItems={'center'} px={2} pt={2} gap={2}>
            <Icon as={People} variant="Bold" fontSize={30} />
            <Text fontSize={15} fontWeight={'bolder'}>Total Employee</Text>
        </Flex>
        <Flex pt={3} gap={4} justifyContent={'left'} px={2} alignItems={'center'}>
            <Icon as={People} variant="Bold"p={2} bg={'darkorchid'} fontSize={30} borderRadius={20} color={'white'} />
            {/* <Text fontSize={15} fontWeight={'medium'}>Total :{fetchedData.length()}</Text> */}
        </Flex>
    </Box>
    <Box width={'220px'} height={'110px'} p={3} className='panel' cursor={'pointer'} borderRadius={20} bg={'white'}>
        <Flex alignItems={'center'} gap={2} pt={1}>
            <Icon as={UserCirlceAdd} variant="Bold" fontSize={35} />
            <Text fontSize={15} fontWeight={'bolder'}>New Employee</Text>
        </Flex>
        <Flex pt={2} gap={4} justifyContent={'left'} alignItems={'center'}>
            <Icon as={UserTag}  fontSize={40} variant="Bold" color={'tomato'} />
            <Text fontSize={15} fontWeight={'medium'}>24 New Employee</Text>
        </Flex>
    </Box>
    <Box width={'220px'} p={3} height={'110px'} className='panel' cursor={'pointer'} borderRadius={20} bg={'white'}>
        <Flex alignItems={'center'} pt={1} gap={2} pb={1}>
            <Icon as={Wallet} variant="Bold" fontSize={35}  />
            <Text fontSize={15} fontWeight={'bolder'}>Avaliable Balance</Text>
        </Flex>
        <Flex pt={2} gap={4} justifyContent={'left'} alignItems={'center'}>
            <Icon as={DollarCircle} variant="Bold" color={'yellowgreen'} fontSize={30} />
            <Text fontSize={20} fontWeight={'bolder'}>$200,000,000</Text>
        </Flex>
      
    </Box>
    </Flex>
</Box>
  )
}

export default Dash