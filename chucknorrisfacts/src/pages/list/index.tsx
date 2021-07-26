import React from "react";
import { useQuery } from 'react-query'
import { Box, Checkbox, Flex, Heading, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/header/index.tsx";
import { Sidebar } from "../../components/sidebar/index.tsx";
import { Pagination } from "../../components/pagination";

export default function FactsList() {

    const { data, isLoading, error } = useQuery('facts', async () => {
        const response = await fetch('https://api.icndb.com/jokes')
        const data = await response.json()

        const value = data.value.map(value =>{
            return {
                id: value.id,
                joke: value.joke,
                categories: value.categories
            };
        });

        return value;
    },
    {
        staleTime: 1000 * 5,
    })

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

                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex>
                            <Text>Error. Try again later.</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha" >
                                <Thead>
                                    <Tr>
                                        <Th px={["2", "4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="red" />
                                        </Th>
                                        {isWideVersion && <Th>Id</Th>}
                                        <Th px={["2", "4", "4", "6"]}>Fact</Th>
                                        <Th px={["2", "4", "4", "6"]}>Category</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map(value =>{
                                        return(
                                            <Tr key={value.id}>
                                        <Td px={["2", "4", "4", "6"]}>
                                            <Checkbox colorScheme="red" />
                                        </Td>
                                        {isWideVersion &&
                                            <Td>
                                                <Text fontSize="sm" color="gray.300">{value.id}</Text>
                                            </Td>
                                        }
                                        <Td px={["2", "4", "4", "6"]}>
                                            <Text fontSize="sm" color="gray.300">{value.joke}</Text>
                                        </Td>

                                        <Td px={["2", "4", "4", "6"]}>
                                            <Text fontSize="sm" color="gray.300">{value.categories}</Text>
                                        </Td>

                                    </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}