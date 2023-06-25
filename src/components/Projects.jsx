import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ArrowRight } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Box py={40} className="pj">
      <Text className="some">Here are some of my projects</Text>

      <Box py={5}>
        <Box gap={5} alignItems={"center"} className="project">
          <Box className="main-box">
            <Box>
              <Box bg={"goldenrod"} className="probox"></Box>
              <Text textAlign={"center"}>
                <Link className="link">Employee Management Systems</Link>
              </Text>
            </Box>
            <Box>
              <Box bg={"tomato"} className="probox"></Box>
              <Text textAlign={"center"}>
                <Link className="link">Employee Management Systems</Link>
              </Text>
            </Box>
          </Box>
          <Box className="main-box">
            <Box>
              <Box bg={"lightgreen"} className="probox"></Box>
              <Text textAlign={"center"}>
                <Link className="link">Employee Management Systems</Link>
              </Text>
            </Box>
            <Box>
              <Box bg={"indigo"} className="probox"></Box>
              <Text textAlign={"center"}>
                <Link className="link">Employee Management Systems</Link>
              </Text>
            </Box>
          </Box>
          <IconButton icon={<ArrowRight />}></IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
