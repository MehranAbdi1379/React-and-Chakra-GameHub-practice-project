import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      paddingTop="20px"
      paddingBottom="20px"
      paddingLeft="20px"
      paddingRight="7px"
      align="center"
    >
      <Image
        boxShadow="md"
        boxSize="52px"
        src="/public/img/logo.png"
        borderRadius="20px"
        marginRight="20px"
      ></Image>
      <FormControl>
        <InputGroup borderRadius={20}>
          <InputLeftElement paddingTop={2.5}>
            <Button type="submit" variant="ghost" borderRadius={20}>
              <SearchIcon></SearchIcon>
            </Button>
          </InputLeftElement>
          <Input
            paddingBottom={1}
            placeholder="Search games..."
            borderRadius={20}
            height="50px"
          ></Input>
        </InputGroup>
      </FormControl>

      <Flex align="center" height="full" paddingLeft="10px">
        <Switch onChange={toggleColorMode}></Switch>
        <FormLabel paddingTop="5px" paddingLeft="7px" minWidth="90px">
          Dark Mode
        </FormLabel>
      </Flex>
    </Flex>
  );
};

export default Navbar;
