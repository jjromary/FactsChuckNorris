import React, { useEffect, useState } from "react";
import { Select, Box, Button, Checkbox, Flex, Heading, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Stack } from "@chakra-ui/react";
import { Header } from "../../components/header/index.tsx";
import { Sidebar } from "../../components/sidebar/index.tsx";
import { useFacts } from "../../services/hooks/useFacts";


export default function FactsList() {
    const { data, isLoading, isFetching, error } = useFacts()

    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const [category, setCategory] = useState('')

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

    // LÓGICA DE FILTRAGEM PELA CATEGORIA
    const arrayNerdy = data?.filter(object => object.categories[0] === 'nerdy')
    const newarrayNerdy = arrayNerdy?.slice(startIndex, endIndex)
    const pagesNerdy = Math.ceil(arrayNerdy?.length / itensPerPage)

    const arrayExplict = data?.filter(object => object.categories[0] === 'explicit')
    const newarrayExplict = arrayExplict?.slice(startIndex, endIndex)
    const pagesExplict = Math.ceil(arrayExplict?.length / itensPerPage)

    console.log('arrayNerdy', arrayNerdy)
    console.log('arrayExplict', arrayExplict)
    console.log('category', category)
    
    // if (category === 'Nerdy'){
    //     const currentItens = arrayNerdy.filter(object => object.categories[0] === 'nerdy')
    //     const pages = Math.ceil(arrayNerdy?.length / itensPerPage)        
    // }
    return (
        <Box>
            <Header  />
            
            <Flex 
                w="100%" 
                my="6" 
                maxWidth={1480} 
                mx="auto" 
                px="6" 
            >
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
                                onChange={(e) => { setCategory(e.target.value) }}
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
                                <Text
                                    mt="4"
                                >Facts per page
                                </Text>
                                <Select
                                    colorScheme="whiteAlpha"
                                    size="sm"
                                    w="150px"
                                    mt="6"
                                    color="gray.500"
                                    cursor="pointer"
                                    value={itensPerPage}
                                    onChange={(e) => setItensPerPage(Number(e.target.value))}
                                >
                                    <option value={5} placeholder="Filled">5</option>
                                    <option value={10} placeholder="Filled">10</option>
                                </Select>


                                {/* LÓGICA DA PAGINAÇÃO */}
                                <Box
                                    mt="8"
                                    spacing="6"
                                    justify="space-between"
                                    alignItems="center"
                                >
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
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}