import React from "react";
import { Box, Checkbox, Flex, Heading, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/header/index.tsx";
import { Sidebar } from "../../components/sidebar/index.tsx";
import { Pagination } from "../../components/pagination";

export default function FactsList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >

                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" >Facts List</Heading>
                    </Flex>

                    <Table colorScheme="whiteAlpha" >
                        <Thead>
                            <Tr>
                                <Th px={["2","4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="red" />
                                </Th>
                                {isWideVersion && <Th>Id</Th>}
                                <Th px={["2","4", "4", "6"]}>Fact</Th>
                                <Th px={["2","4", "4", "6"]}>Category</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["2","4", "4", "6"]}>
                                    <Checkbox colorScheme="red" />
                                </Td>
                                {isWideVersion &&
                                    <Td>
                                        <Text fontSize="sm" color="gray.300">1</Text>
                                    </Td>
                                }
                                <Td px={["2","4", "4", "6"]}>
                                    <Text fontSize="sm" color="gray.300">Chuck Norris uses ribbed condoms inside out, so he gets the pleasure.</Text>
                                </Td>

                                <Td px={["2","4", "4", "6"]}>
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