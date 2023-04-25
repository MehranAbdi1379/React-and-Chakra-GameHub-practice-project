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

interface Props {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
}

const Sidebar = ({ selectedGenre, setSelectedGenre }: Props) => {
  return (
    <Box p="25px">
      <Heading size="lg">Genres</Heading>
      <List paddingTop="25px">
        {genres.map((genre) => (
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
                <Link
                  onClick={() => setSelectedGenre(genre.name)}
                  paddingLeft="10px"
                  fontSize={20}
                  paddingBottom={1}
                  fontWeight={selectedGenre == genre.name ? "bold" : "normal"}
                >
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
