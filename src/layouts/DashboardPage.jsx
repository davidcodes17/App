import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { Bag, Bag2, BagCross, BagCross1, BagHappy, BagTick, BagTick2, DollarCircle, Notification, Notification1, NotificationBing, NotificationCircle, People, SaveMinus, User, UserCirlceAdd, UserTag, Wallet } from "iconsax-react";
import React from "react";
import Dash from "../components/Dash";
import Emoloyee from "../components/Emoloyee";
import GetEmployee from "../components/GetEmployee";
import Modala from "../components/Modala";
const DashboardPage = () => {
  return (
    <Box py={4} bgSize={'cover'}>
        <Flex justifyContent={'space-between'} gap={620} alignItems={'center'}>
        <Heading fontSize={30} fontWeight={'medium'} pb={4}>Dashboard</Heading>
        <Box>
            <Flex alignItems={'center'} gap={5}>
                <Icon as={Notification} fontSize={20} />
                <Heading fontSize={5}><User size={20} /></Heading>
            </Flex>

        </Box>
        </Flex>
            <Dash />
            <Modala/>
            <Emoloyee />
            <GetEmployee />
       
    </Box>
  );
};

export default DashboardPage;
