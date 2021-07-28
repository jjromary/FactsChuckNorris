
import { AspectRatio, Flex, Text, SimpleGrid, Box, Image, Stack, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/header/index.tsx";
import { Sidebar } from "../components/sidebar/index.tsx";
import chucknorris from '../../assets/chucknorris.gif'

export default function Home() {


  return (
      <Box>
          <Header />

          <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
              <Sidebar />

              <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                  <HStack
                      spacing="24px"
                      display="flex"
                      alignItems="center"
                      // justifyContent="space-evenly"
                  >
                      <Box boxShadow="dark-lg">
                          <Image                              
                              boxSize="480px"
                              src="https://cdn.cinepop.com.br/2020/03/chuck-norris-1.jpg"
                              alt="Carlos Ray Norris"
                          />
                      </Box>
                      <Box w="500px">
                          <Text mr="8" fontSize="lg" fontWeight="normal">
                              Apliação que contém fatos sobre o personagem de filmes de ação, Chuck Norris!
                          </Text>
                      </Box>

                  </HStack>
              </Box>
          </Flex>
      </Box>
  );
}
