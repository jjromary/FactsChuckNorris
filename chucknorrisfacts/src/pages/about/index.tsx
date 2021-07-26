import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../components/header/index.tsx";
import { Sidebar } from "../../components/sidebar/index.tsx";

export default function About() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" align="center">
                        <Heading size="lg" fontWeight="normal" >About Chuck Norris</Heading>
                    </Flex>

                    <HStack
                        spacing="24px"
                        display="flex"
                        alignItems="center"
                        // justifyContent="space-evenly"
                    >
                        <Box   >
                            <Image
                                borderRadius="full"
                                boxSize="200px"
                                src="http://4.bp.blogspot.com/-lE83HZXNIeY/UVZrwySBY5I/AAAAAAAAAMU/C4tDgoF_Q2g/s1600/-Chuck_Norris-_01.jpg"
                                alt="Carlos Ray Norris"
                            />
                        </Box>
                        <Box w="500px">
                            <Text mr="8" fontSize="lg" fontWeight="normal">
                                Chuck Norris started studying martial arts in Korea in the 1950s. He was serving in the U.S. Air Force at the time. When he returned home, Norris soon opened his karate studio. He switched to movies in the 1970s, appearing with Bruce Lee in Way of the Dragon. Norris became a popular action-film star in the 1980s and starred in his own television series in the 1990s.
                            </Text>
                        </Box>

                    </HStack>
                </Box>
            </Flex>
        </Box>
    );
}