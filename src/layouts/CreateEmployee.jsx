import { Box, Button, Flex, FormErrorMessage, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { UserCirlceAdd } from 'iconsax-react'

const CreateEmployee = () => {
const url = "http://localhost:8080/api/users";
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const Email = document.querySelector('.email');
const PhoneNumber = document.querySelector('.phoneNumber');
const AccountDetails = document.querySelector('.accountDetails');
const SalarySigned = document.querySelector('.salarySigned');

const createEmployee = ()=>{
    fetch(url,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(
            {
                firstname : firstName.value,
                lastname : lastName.value,
                email : Email.value,
                phoneNumber : PhoneNumber.value,
                accountDetails : AccountDetails.value,
                salarySigned : SalarySigned.value
            })
    }).then(res=>{
        res.json();
    })
    location.reload();
}

  return (
    <Box mt={3}>
        <Box className='employeeForm'>
            <Heading fontSize={30} fontWeight={'bolder'}>Create New Employee</Heading>
            <Flex mt={10} gap={10}>
            <Box>
            <Text mb={2}>First Name</Text>
            <Input border={'2px solid black'} className='firstname' px={3} py={3} borderRadius={10} placeholder='First Name' />
            </Box>
            <Box>
            <Text mb={2}>Last Name</Text>
            <Input border={'2px solid black'} className='lastname' px={3} py={3} borderRadius={10} placeholder='Last Name' />
            </Box>
            </Flex>
           <Flex mt={10} gap={10}>
           <Box>
            <Text mb={2}>Email</Text>
            <Input border={'2px solid black'} className='Email' px={3} py={3} borderRadius={10} placeholder='you@gmail.com' />
            </Box>
           <Box>
            <Text mb={2}>Phone Number</Text>
            <Input border={'2px solid black'} className='phoneNumber' px={3} py={3} borderRadius={10} placeholder='+2349015061171' />
            </Box>
           </Flex>
           <Flex mt={10} gap={10}>
           <Box>
            <Text mb={2}>Account Details</Text>
            <Input border={'2px solid black'} className='accountDetails' px={3} py={3} borderRadius={10} placeholder='2382054214 Opay' />
            </Box>
           <Box>
            <Text mb={2}>Salary Signed</Text>
            <Input border={'2px solid black'} className='salarySigned' px={3} py={3} borderRadius={10} placeholder='$2000' />
            </Box>
           </Flex>
            <Button mt={10} bg={'darkorchid'} onClick={createEmployee} px={'10px'} width={'460px'} gap={2} py={3} color={'white'} borderRadius={10} fontSize={'22px'}>
                <UserCirlceAdd size={'30px'} />
                <Text>Create Employee</Text>
            </Button>
        </Box>
    </Box>
  )
}

export default CreateEmployee