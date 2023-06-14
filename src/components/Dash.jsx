import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { DollarCircle, People, UserCirlceAdd, UserTag, Wallet } from "iconsax-react";
import React, { useEffect, useState } from "react";

const url = "http://localhost:8080/api/users";

let dData  = 0
const getLength = (db)=>{
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{ console.log(data.length)
    db = data.length
})
}
const Dash = () => {
  return (
    <Box pt={2}>
    <Box gap={5} className="panels">
    <Box width={'220px'} height={'110px'} className='panel'p={3} mb={4} cursor={'pointer'} borderRadius={20} bg={'white'}>
        <Flex alignItems={'center'} px={2} pt={2} gap={2}>
            <Icon as={People} variant="Bold" fontSize={30} />
            <Text fontSize={15} fontWeight={'bolder'}>Total Employee</Text>
        </Flex>
        <Flex pt={3} gap={4} justifyContent={'left'} px={2} alignItems={'center'}>
            <Icon as={People} variant="Bold"p={2} bg={'darkorchid'} fontSize={30} borderRadius={20} color={'white'} />
            <Text fontSize={15} fontWeight={'medium'} onLoad={()=>{
                getLength(dData)}
            }>{`Total : ${dData}`}</Text>     </Flex>
    </Box>
    <Box width={'220px'} height={'110px'} p={3} className='panel' mb={4} cursor={'pointer'} borderRadius={20} bg={'white'}>
        <Flex alignItems={'center'} gap={2} pt={1}>
            <Icon as={UserCirlceAdd} variant="Bold" fontSize={35} />
            <Text fontSize={15} fontWeight={'bolder'}>New Employee</Text>
        </Flex>
        <Flex pt={2} gap={4} justifyContent={'left'} alignItems={'center'}>
            <Icon as={UserTag}  fontSize={40} variant="Bold" color={'tomato'} />
            <Text fontSize={15} fontWeight={'medium'}>2 New Employee</Text>
        </Flex>
    </Box>
    <Box width={'220px'} p={3} height={'110px'} className='panel' mb={4} cursor={'pointer'} borderRadius={20} bg={'white'}>
        <Flex alignItems={'center'} pt={1} gap={2} pb={1}>
            <Icon as={Wallet} variant="Bold" fontSize={35}  />
            <Text fontSize={15} fontWeight={'bolder'}>Avaliable Balance</Text>
        </Flex>
        <Flex pt={2} gap={4} justifyContent={'left'} alignItems={'center'}>
            <Icon as={DollarCircle} variant="Bold" color={'yellowgreen'} fontSize={30} />
            <Text fontSize={20} fontWeight={'bolder'}>$200,000,000</Text>
        </Flex>
      
    </Box>
    </Box>
</Box>
  )
}

export default Dash