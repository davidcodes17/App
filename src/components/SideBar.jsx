import { Box } from '@chakra-ui/react'
import React from 'react'
import NavTemplate from './NavTemplate'
import { Link } from 'react-router-dom'
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

const SideBar = () => {
  return (
    <Box>
        <Link to="/dashboard">
        <NavTemplate icon={<Category2 variant="Bold" />} name="Dashboard" />
        </Link>
          <NavTemplate icon={<Wallet variant="Bold" />} name="Payments" />
          <Link to="/createEmployee">
          <NavTemplate icon={<ProfileAdd variant="Bold"/>} name="Create Employee" />

          </Link>
          <NavTemplate icon={<ProfileDelete variant="Bold"/>} name="Delete Employee" />
          <NavTemplate icon={<ArrowForwardSquare variant="Bold"/>} name="Update Employee" />
          <NavTemplate icon={<DocumentText variant="Bold"/>} name="View Employee" />
          <NavTemplate icon={<ArrowRotateRight variant="Bold"/>} name="History" />
          <NavTemplate icon={<Setting2 variant="Bold"/>} name="Settings" />
          <NavTemplate icon={<Logout variant="Bold"/>} name="Logout" />
    </Box>
  )
}

export default SideBar