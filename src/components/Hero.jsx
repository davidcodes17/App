import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { ArrowDown3, Call, Whatsapp } from "iconsax-react";
import React from "react";

const Hero = () => {
  return (
    <Flex py={20} alignItems={'center'} justifyContent={'space-between'} >
      <Box className="mother">
        <Text fontWeight={700} fontFamily={"Poppins"} className="head">
          Hey I'm DC
        </Text>
        <Text className="child">I'm a Java Developer</Text>
        <Text className="txt">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligend
          <br />
          beatae repellat doloribus et? Consequuntur ratione, vitae, illo eaque
          <br />
          veniam laboriosam molestias incidunt in atque rem iure magnam corrupti
          <br />
          beatae repellat doloribus et? Consequuntur ratione, vitae, illo eaque
          <br />
          veniam laboriosam molestias incidunt in atque rem iure magnam corrupti
          <br />
          quisquam non!
        </Text>
        <Flex my={2} width={280} borderRadius={10} className="box">
          <Input
          className="input"
            placeholder="your whatsap number"
            fontSize={10}
            bg={"none"}
            py={5}
            width={250}
            border={0}
          />
          <IconButton borderRadius={10} icon={<Whatsapp variant="Bold" />} />
        </Flex>
      </Box>
      <Image className="bg-img" src="asset.png" width={'40%'} />
    </Flex>
  );
};

export default Hero;
