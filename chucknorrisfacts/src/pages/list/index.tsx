import React, { useEffect, useState } from "react";
import { Select, Box, Button, Checkbox, Flex, Heading, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Stack } from "@chakra-ui/react";
import { Header } from "../../components/header/index.tsx";
import { Sidebar } from "../../components/sidebar/index.tsx";
import { useFacts } from "../../services/hooks/useFacts";


export default function FactsList() {
    const { data, isLoading, isFetching, error } = useFacts()

    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const [category, setCategory] = useState("ALL")

    const pages = Math.ceil(data?.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = data?.slice(startIndex, endIndex)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    // retornar ao inicio da lista quando for alterado o número de fatos exibidos
    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage])

    const arrayNerdy = currentItens.filter(object => object.categories ); 
    console.log('teste', arrayNerdy);

    
    
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
                <Sidebar />

                <Box 
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p="8" 
                >
                    <Flex 
                        mb="8" 
                        justify="space-between" 
                        align="center"
                    >
                        <Heading 
                            size="lg" 
                            fontWeight="normal"  
                        >
                            Facts List
                            {!isLoading && isFetching && <Spinner size="sm" ml="4" />}
                        </Heading>
                        <Box size="xl">
                            <Text>Ordenar por</Text>

                            <Select 
                                size="sm" 
                                w="150px" 
                                fontSize="sm" 
                                colorScheme='gray.500' 
                                color="gray.500" 
                                cursor="pointer"
                                className="custom-select"
                                aria-label="Filter by category" 
                                onChange={(e) => {setCategory(e.target.value)}}
                            >
                                
                                <option value={'Nerdy'} placeholder="Filled" >Nerdy</option>
                                <option value={'Explicit'} placeholder="Filled" >Explicit</option>
                                <option value={' '} placeholder="Filled" >Clean</option>
                                
                            </Select>
                        </Box>
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

                                    {/* LISTANDO FATOS NA TELA */}
                                    {currentItens.map(data => {
                                        return (
                                            <Tr key={data.id}>
                                                <Td px={["2", "4", "4", "6"]}>
                                                    <Checkbox colorScheme="red" />
                                                </Td>
                                                {isWideVersion &&
                                                    <Td>
                                                        <Text fontSize="sm" color="gray.300">{data.id}</Text>
                                                    </Td>
                                                }
                                                <Td px={["2", "4", "4", "6"]}>
                                                    <Text fontSize="sm" color="gray.300">{data.joke}</Text>
                                                </Td>

                                                <Td px={["2", "4", "4", "6"]}>
                                                    <Text fontSize="sm" color="gray.300">{data.categories}</Text>
                                                </Td>

                                            </Tr>

                                        )
                                    }



                                    )}

                                </Tbody>
                            </Table>

                            <Stack spacing="2">
                                {/*LÓGICA DE FATOS POR PÁGINA  */}
                                <Text mt="4">Facts per page</Text>
                                <Select colorScheme="whiteAlpha" size="sm" w="150px" mt="6" color="gray.500" cursor="pointer" value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
                                    <option value={5} placeholder="Filled">5</option>
                                    <option value={10} placeholder="Filled">10</option>
                                    {/* <option value={30} placeholder="Filled">30</option>
                                    <option value={40} placeholder="Filled">40</option>
                                    <option value={50} placeholder="Filled">50</option>
                                    <option value={60} placeholder="Filled">60</option>
                                    <option value={70} placeholder="Filled">70</option>
                                    <option value={80} placeholder="Filled">80</option>
                                    <option value={90} placeholder="Filled">90</option>
                                    <option value={100} placeholder="Filled">100</option> */}
                                </Select>


                                {/* LÓGICA DA PAGINAÇÃO */}
                                <Box mt="8" spacing="6"
                                    justify="space-between"
                                    alignItems="center">
                                    {Array.from(Array(pages), (data, index) => {
                                        return (
                                            <Button size="sm"
                                                m="1"
                                                fontSize="xs"
                                                bg="gray.700"
                                                _hover={{
                                                    bgColor: 'gray.500'
                                                }}
                                                value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}
                                            </Button>
                                        );
                                    })}
                                </Box>
                            </Stack>


                            {/* <Pagination /> */}
                        </>

                    )}
                </Box>
            </Flex>
        </Box>
    );
}