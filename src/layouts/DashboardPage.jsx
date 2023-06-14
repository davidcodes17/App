import { Box, Flex, Heading, Icon, Switch, Text } from "@chakra-ui/react";
import { Notification, User } from "iconsax-react";
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
                <User size={20} />
                <Switch colorScheme="teal" />
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
