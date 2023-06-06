import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import NavTemplate from "../components/NavTemplate";
import {
  ArchiveBook,
  ArrowForwardSquare,
  ArrowRight,
  ArrowRotateRight,
  Category2,
  Chart,
  Chart2,
  DocumentText,
  Logout,
  ProfileAdd,
  ProfileDelete,
  Setting2,
  Wallet,
  Wallet1,
} from "iconsax-react";
import Details from "../components/Details";
import CreateEmployee from "./CreateEmployee";

const DashboardPage = () => {
  return (
    <Box>
      <a href="/Logo.jsx"></a>
      <Flex gap={30}>
        <Box p={0} bg={""}>
          {/* <Logo /> */}
          <Flex
            px={5}
            py={4}
            bg={"white"}
            color={"black"}
            gap={3}
            fontWeight={"bolder"}
            alignItems={"center"}
          >
            <ArchiveBook variant="Bold" size={40} />{" "}
            <Text fontSize={23}>Employee MGT</Text>
          </Flex>
          <NavTemplate icon={<Category2 variant="Bold" />} name="Dashboard" />
          <NavTemplate icon={<Wallet variant="Bold" />} name="Payments" />
          <NavTemplate icon={<ProfileAdd variant="Bold"/>} name="Create Employee" />
          <NavTemplate icon={<ProfileDelete variant="Bold"/>} name="Delete Employee" />
          <NavTemplate icon={<ArrowForwardSquare variant="Bold"/>} name="Update Employee" />
          <NavTemplate icon={<DocumentText variant="Bold"/>} name="View Employee" />
          <NavTemplate icon={<ArrowRotateRight variant="Bold"/>} name="History" />
          <NavTemplate icon={<Setting2 variant="Bold"/>} name="Settings" />
          <NavTemplate icon={<Logout variant="Bold"/>} name="Logout" />
        </Box>

        {/* <Box py={2}>
          <Heading fontWeight={"bolder"} fontSize={40}>
            Dashboard
          </Heading>
          <Heading fontSize={30}>Hello DC</Heading>
          <Flex gap={"20px"} alignItems={"center"} mt={5}>
            <Box
              width={"250px"}
              height={"100px"}
              borderRadius={10}
              border={"2px solid black"}
            >
              <Flex alignItems={"center"} p={1}>
                <Text px={3} fontSize={"25px"} py={0} fontWeight={"bolder"}>
                  New Employees
                </Text>
                <Chart
                  size={100}
                  variant="Bold"
                  color="darkorchid"
                  className="chart"
                />
              </Flex>
            </Box>
            <Box
              width={"250px"}
              height={"100px"}
              borderRadius={10}
              border={"2px solid black"}
            >
              <Flex alignItems={"center"}>
                <Text px={3} fontSize={"25px"} py={2} fontWeight={"bolder"}>
                  Total Employee
                </Text>
                <Chart2
                  size={100}
                  variant="Bold"
                  color="darkorchid"
                  className="chart"
                />
              </Flex>
            </Box>
            <Box
              width={"250px"}
              height={"100px"}
              borderRadius={10}
              border={"2px solid black"}
            >
              <Flex alignItems={"center"}>
                <Text px={3} fontSize={"25px"} py={0} fontWeight={"bolder"}>
                  Payment Status
                </Text>
                <Wallet1
                  size={100}
                  variant="Bold"
                  color="darkorchid"
                  className="chart"
                />
              </Flex>
            </Box>
            <Box
              border={"2px solid black"}
              cursor={"pointer"}
              color={"black"}
              p={2}
              borderRadius={40}
            >
              <ArrowRight />
            </Box>


          </Flex>

          <Box mt={10}>
            <Flex alignItems={'center'} gap={5}>
              <Heading fontSize={30} fontWeight={'bolder'}>Employees</Heading>
              <Input border={'2px solid black'} py={2} outline={'none'} placeholder="Filter Search By ID" borderRadius={10} px={3} />
            </Flex>

            <Box>
                <Details />
            </Box>
          </Box>
        </Box> */}
        <CreateEmployee />
      </Flex>
    </Box>
  );
};

export default DashboardPage;
