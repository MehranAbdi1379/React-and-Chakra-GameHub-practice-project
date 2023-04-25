import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import genres from "../data/genres";

const Sidebar = () => {
  type genre = {
    id: number;
    name: string;
    image_background: string;
  };
  const GameGenres: genre[] = genres;
  return (
    <Box p="25px">
      <Heading size="lg">Genres</Heading>
      <List paddingTop="25px">
        {GameGenres.map((genre) => (
          <ListItem key={genre.id} paddingBottom={4}>
            <FormControl>
              <Flex align="center">
                <Image
                  src={genre.image_background}
                  borderRadius="10px"
                  fit="cover"
                  height="50px"
                  width="50px"
                ></Image>
                <Link paddingLeft="10px" fontSize={20} paddingBottom={1}>
                  {genre.name}
                </Link>
              </Flex>
            </FormControl>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
