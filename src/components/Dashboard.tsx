import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import genres from "../data/genres";
import { ChevronDownIcon } from "@chakra-ui/icons";
import platforms from "../data/platforms";

interface Props {
  selectedGenre: string;
}

const Dashboard = ({ selectedGenre }: Props) => {
  const [platformSelectDisplay, setPlatformSelectDisplay] = useState("");
  const [orderSelectDisplay, setOrderSelectDisplay] = useState("Relavance");

  return (
    <Box paddingTop={5} paddingRight={5}>
      <Heading>
        {platformSelectDisplay + " "}
        {selectedGenre + " "}Games
      </Heading>
      <Flex paddingTop={5}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {platformSelectDisplay === "" ? "Platforms" : platformSelectDisplay}
          </MenuButton>
          <MenuList>
            {platforms.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => setPlatformSelectDisplay(platform.name)}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Box marginLeft={4}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Order by: {orderSelectDisplay}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setOrderSelectDisplay("Relavance")}>
                Relevance
              </MenuItem>
              <MenuItem onClick={() => setOrderSelectDisplay("Date added")}>
                Date added
              </MenuItem>
              <MenuItem onClick={() => setOrderSelectDisplay("Name")}>
                Name
              </MenuItem>
              <MenuItem onClick={() => setOrderSelectDisplay("Release Date")}>
                Release Date
              </MenuItem>
              <MenuItem onClick={() => setOrderSelectDisplay("Popularity")}>
                Popularity
              </MenuItem>
              <MenuItem onClick={() => setOrderSelectDisplay("Average rating")}>
                Average rating
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      <SimpleGrid spacing={7} columns={4} minChildWidth={400} paddingTop={7}>
        {genres.map((genre) =>
          genre.games.map(
            (game) =>
              (genre.name == selectedGenre || selectedGenre == "") && (
                <Card height={350} borderRadius={20}>
                  <Image
                    src={genres[0].image_background}
                    borderTopRadius={20}
                  ></Image>

                  <CardHeader>{game.name}</CardHeader>
                </Card>
              )
          )
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
