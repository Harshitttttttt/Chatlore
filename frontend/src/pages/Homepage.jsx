import {
  Box,
  Container,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="#76ABAE"
        borderRadius="lg"
        borderWidth="1px"
        borderColor="#76ABAE"
        w="100%"
        m="40px 0 15px 0"
      >
        <Text textAlign={"center"} color={"#222831"} fontFamily={"Open sans"}>
          Chatlore
        </Text>
      </Box>
      <Box
        bg="#76ABAE"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        borderColor="#76ABAE"
        color={"#222831"}
        fontFamily={"Open sans"}
      >
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign-Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
