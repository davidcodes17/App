import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  Sun,
  Moon,
  Sun1,
  Instagram,
  Facebook,
  Message,
  MessageText1,
  Apple,
  Call,
  CallAdd,
  CallCalling,
  Award,
  HambergerMenu,
  LinkSquare,
} from "iconsax-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Typewriter from "typewriter-effect/dist/core";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box className="boxer">
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={10}>
          #davidcodes <br />
          Spring Boot Dev
        </Text>
        <Flex gap={10} fontSize={12}>
          <a href="#" className="nav">home</a>
          <a href="#id" className="nav">about</a>
          <a href="#project" className="nav">projects</a>
          <Link className="nav">clients</Link>
        </Flex>
        <Flex gap={2}>
          <Box>
            <IconButton
              className="hamburger"
              borderRadius={40}
              icon={<HambergerMenu />}
            ></IconButton>
            <Box fontSize={10} className="ham">
              <Link>home</Link> <br />
              <Link>about</Link> <br />
              <Link>projects</Link>
              <br />
              <Link>clients</Link> <br />
            </Box>
          </Box>
          <IconButton
            borderRadius={40}
            className="awd"
            icon={<Award variant="Bold" size={20} />}
          ></IconButton>
          <IconButton
            borderRadius={40}
            icon={
              isDark ? (
                <Sun1 variant="Bold" color="skyblue" size={20} />
              ) : (
                <Moon variant="Bold" />
              )
            }
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
