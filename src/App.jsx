import React, { useRef, useState } from "react";
import Header from "./components/Header";
import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Hero from "./components/Hero";
import { ArrowDown3 } from "iconsax-react";
import About from "./components/About";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Box className="pad">
      <Box className="join">
        <Box className="blur">
          <Header />
          <Hero />
        </Box>
      </Box>
     <Flex justifyContent={'center'}>
     <Box px={4} py={2} borderRadius={40} className="scrool">
        <Text className="text">Scroll Down</Text>
        <a href='#id'>
        <IconButton
          className="animator"
          borderRadius={40}
          icon={<ArrowDown3 color="white" />}
        ></IconButton>
        </a>
      </Box>
     </Flex>
      <Box id="id" mt={20}>
        <About />
      </Box>
    </Box>
  );
};

export default App;
