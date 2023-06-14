import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateEmployee = () => {
const url = "http://localhost:8080/api/user/";
const [ID, setID]=useState({
    id : ''
})
const [forms, setForms]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    accountDetails:'',
    salarySigned:'',
})
const updateEmp = ()=>{

    fetch(`${url}${ID.id}`,{
        method : 'PUT',
        mode : 'cors',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(
            {
                "firstname" : forms.firstName,
                "lastname" : forms.lastName,
                "email" : forms.email,
                "phoneNumber" : forms.phoneNumber,
                "accountDetails" :forms. accountDetails,
                "salarySigned" : forms.salarySigned
            })
    }).then(res=>{
        res.json();
    }).then(data=>{
      console.log(data);
    })
    location.replace('/dashboard');
}
  return (
    <Box mt={3}>
        <Text fontSize={30}>Update Employee</Text>

        <Box>
        <Text py={2}>Please Enter Employee ID</Text>
        <Input placeholder='ID'  value={ID.id}
              onChange={(e) => {
                setID({ ...ID, id: e.target.value });
              }} />
        </Box>














        <Flex mt={10} gap={10}>
          <Box>
            <Text mb={2}>First Name</Text>
            <Input
            required
              value={forms.firstName}
              onChange={(e) => {
                setForms({ ...forms, firstName: e.target.value });
              }}
              className="firstname"
              px={3}
              py={3}
              borderRadius={10}
              placeholder="First Name"
            />
          </Box>
          <Box>
            <Text mb={2}>Last Name</Text>
            <Input
            required
              value={forms.lastName}
              onChange={(e) => {
                setForms({ ...forms, lastName: e.target.value });
              }}
              className="lastname"
              px={3}
              py={3}
              borderRadius={10}
              placeholder="Last Name"
            />
          </Box>
        </Flex>
        <Flex mt={10} gap={10}>
          <Box>
            <Text mb={2}>Email</Text>
            <Input
              required
              value={forms.email}
              onChange={(e) => {
                setForms({ ...forms, email: e.target.value });
              }}
              className="Email"
              px={3}
              py={3}
              borderRadius={10}
              placeholder="you@gmail.com"
            />
          </Box>
          <Box>
            <Text mb={2}>Phone Number</Text>
            <Input
              required
              value={forms.phoneNumber}
              onChange={(e) => {
                setForms({ ...forms, phoneNumber: e.target.value });
              }}
              className="phoneNumber"
              px={3}
              py={3}
              borderRadius={10}
              placeholder="+2349015061171"
            />
          </Box>
        </Flex>
        <Flex mt={10} gap={10}>
          <Box>
            <Text mb={2}>Account Details</Text>
            <Input
            required
              value={forms.accountDetails}
              onChange={(e) => {
                setForms({ ...forms, accountDetails: e.target.value });
              }}
              className="accountDetails"
              px={3}
              py={3}
              borderRadius={10}
              placeholder="2382054214 Opay"
            />
          </Box>
          <Box>
            <Text mb={2}>Salary Signed</Text>
            <Input
            required
              value={forms.salarySigned}
              onChange={(e) => {
                setForms({ ...forms, salarySigned: e.target.value });
              }}
              className="salarySigned"
              px={3}
              py={3}
              borderRadius={10}
              placeholder="$2000"
            />
          </Box>
        </Flex>

        <Button mt={5} float={'right'} bg={'darkorchid'} color={'white'} onClick={updateEmp}>Update Employee</Button>
    </Box>
  )
}

export default UpdateEmployee