import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../components/header/index.tsx";
import { Sidebar } from "../components/sidebar/index.tsx";

export default function Home() {
  return (
    <Flex direction="column" h="100vh" >
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >

        <Sidebar />

        
      </Flex>

    </Flex>

  )
}
