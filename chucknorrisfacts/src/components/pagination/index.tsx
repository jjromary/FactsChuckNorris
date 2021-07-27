import React, { useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";
import { useFacts } from "../../services/hooks/useFacts";

export function Pagination() {
    const { data } = useFacts()
    
    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(data.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = data.slice(startIndex, endIndex)

    return (


        <Stack
            direction={["column", "row"]}
            spacing="6"
            mt="8"
            justify="space-between"
            alignItems="center"
        >

            <Stack direction="row" spacing="2" >
                 
                 {/* <PaginationButton  number={4} /> */}

            </Stack>

            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

        </Stack>
    );
}