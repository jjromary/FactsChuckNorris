import React from "react";
import { Box, Checkbox, Flex, Heading, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Header } from "../../components/header/index.tsx";
import { Sidebar } from "../../components/sidebar/index.tsx";
import { Pagination } from "../../components/pagination";

export default function FactsList() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >

                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" >Facts List</Heading>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="red"/>
                                </Th>
                                <Th>Id</Th>
                                <Th>Fact</Th>
                                <Th>Category</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                <Checkbox colorScheme="red"/>
                                </Td>
                                <Td>
                                    <Text fontSize="sm" color="gray.300">1</Text>
                                </Td>
                                <Td>
                                    <Text fontSize="sm" color="gray.300">Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.</Text>
                                </Td>
                                <Td>
                                    <Text fontSize="sm" color="gray.300">explicit</Text>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}