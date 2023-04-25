import { Button, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Grid templateColumns="repeat(6 , 1fr)">
        <GridItem colSpan={2}>
          <Sidebar></Sidebar>
        </GridItem>
        <GridItem colSpan={4}>
          <Dashboard></Dashboard>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
