import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";
import { FaPlus, FaSun } from "react-icons/fa";


const Navbar = () => {

const { toggleColorMode } = useColorMode();
const bg = useColorModeValue("gray.100", "gray.900");
  
  return <Container maxW={"1140px"} px={4} bg={bg}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          bgGradient="linear(to-r, #F4F269, #A8D26D)"
          textTransform={"uppercase"}
          textAlign={"Center"}
          bgClip="text"
          fontWeight={"bold"}
        >
          <Link to={"/"}> Product Store </Link>
        </Text>

        <HStack spacing={2} align={"center"}>
          <Link to={"/create"}>
            <Button margin={"2"}>
              <FaPlus />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            <FaSun />
          </Button>
        </HStack>
      </Flex>
    </Container>
}

export default Navbar;