import { Box, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { LinkSquare } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={20}
      className="abt"
    >
      <Image src="asset3.png" width={"30%"} className="side" />
      <Box>
        <Text fontFamily={"Poppins"} className="dc">
          Hey, you wanna know <br /> more about me
        </Text>
        <Text className="abt-me">I am David Oluwaseun Areegbe</Text>
        <Text className="abt-me">
          I'm a Full Stack Developer,
          <br />
          i work with Spring Boot and React JS and some other Java related tools
          <br />
          i've work on some projects like Employee Management System,
          Councelling Forms,
          <br />
          School Management Systems, Automated Teller Machine(ATM) and many more{" "}
          <br />
          you can check them on my github link below.
        </Text>
        <Flex pt={2}>
          <LinkSquare />
          <Link to={"https://github.com/davidcodes17"} className="github-link">
            https://github.com/davidcodes17
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About;
