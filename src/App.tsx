import { Button, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <>
      <Navbar></Navbar>
      <Grid templateColumns="repeat(9 , 1fr)">
        <GridItem colSpan={2}>
          <Sidebar
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          ></Sidebar>
        </GridItem>
        <GridItem colSpan={7}>
          <Dashboard selectedGenre={selectedGenre}></Dashboard>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
