import { Box } from "@chakra-ui/react";
import React from "react";
import NavTemplate from "./NavTemplate";
import { Link } from "react-router-dom";
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
    <Box mx={3}>
      <Link to="/dashboard">
        <NavTemplate icon={<Category2 variant="Bulk" />} name="Dashboard" />
      </Link>
      <NavTemplate icon={<Wallet variant="Bulk" />} name="Payments" />
      <Link to="/createEmployee">
        <NavTemplate
          icon={<ProfileAdd variant="Bulk" />}
          name="Create Employee"
        />
      </Link>
      <Link to={"/deleteEmployee"}>
          <NavTemplate
            icon={<ProfileDelete variant="Bulk" />}
            name="Delete Employee"
          />
      </Link>
      <Link to={'/updateEmployee'}>
      <NavTemplate
        icon={<ArrowForwardSquare variant="Bulk" />}
        name="Update Employee"
      />
      </Link>
      {/* <NavTemplate
        icon={<DocumentText variant="Bulk" />}
        name="View Employee"
      /> */}
      <NavTemplate icon={<ArrowRotateRight variant="Bulk" />} name="History" />
      <Link to={"/settings"}>
        <NavTemplate icon={<Setting2 variant="Bulk" />} name="Settings" />
      </Link>
      <NavTemplate icon={<Logout variant="Bulk" />} name="Logout" />
    </Box>
  );
};

export default SideBar;
