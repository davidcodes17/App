import { Box, Button, Flex, Heading, Input, Text, useToast } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { UserCirlceAdd } from 'iconsax-react'
import Modala from '../components/Modala';

const CreateEmployee = () => {
const url = "http://localhost:8080/api/users";
// const firstName = document.querySelector('.firstname');
// const lastName = document.querySelector('.lastname');
// const Email = document.querySelector('.email');
// const PhoneNumber = document.querySelector('.phoneNumber');
// const AccountDetails = document.querySelector('.accountDetails');
// const SalarySigned = document.querySelector('.salarySigned');
const [forms, setForms]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    accountDetails:'',
    salarySigned:'',
})
const createEmployee = ()=>{

    fetch(url,{
        method : 'POST',
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
    location.reload();
}
const toast = useToast();
return (
    <Flex mt={3} justifyContent={'center'} className='empl'>
      <Box className="employeeForm">
        <Heading fontSize={30} fontWeight={"bolder"}>
          Create New Employee
        </Heading>
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
        <Button
          mt={10}
          bg={"darkorchid"}
          px={"40px"}
          gap={2}
          onClick={()=>{
            createEmployee()
                toast({
                    title : 'New Employee Created',
                    status : 'success',
                    isClosable : true,
                    colorScheme :'pink'
                })
          }}
          py={0}
          height={50}
          color={"white"}
          borderRadius={10}
          fontSize={"20px"}
        >
          <Text>Create Employee</Text>
        </Button>


      </Box>
    </Flex>
  );
}

export default CreateEmployee