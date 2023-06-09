import {
  Table,
  Thead,
  Box,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const GetEmployee = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/api/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFetchedData(data));
  }, []);
  return (
    <Box mt={5}>
      <TableContainer border={'1px solid black'} borderRadius={10}>
        <Table borderRadius={20}>
          <Thead>
            <Tr bg={'darkorchid'}>
              <Th color={'white'} fontSize={10}>ID</Th>
              <Th color={'white'} fontSize={10}>First Name</Th>
              <Th color={'white'} fontSize={10}>Last Name</Th>
              <Th color={'white'} fontSize={10}>Email Address</Th>
              <Th color={'white'} fontSize={10}>Phone Number</Th>
              <Th color={'white'} fontSize={10}>Account Details</Th>
              <Th color={'white'} fontSize={10}>Salary Signed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
                fetchedData.map((em,i)=>(
                    <Tr>
                        <Td fontSize={10}>{em.id}</Td>
                        <Td fontSize={10}>{em.firstname}</Td>
                        <Td fontSize={10}>{em.lastname}</Td>
                        <Td fontSize={10}>{em.email}</Td>
                        <Td fontSize={10}>{em.phoneNumber}</Td>
                        <Td fontSize={10}>{em.accountDetails}</Td>
                        <Td fontSize={10}>{em.salarySigned}</Td>
                    </Tr>
                ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GetEmployee;
