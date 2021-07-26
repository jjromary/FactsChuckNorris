import React from "react";
import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationButton } from "./PaginationButton";

export function Pagination() {
    return (

        <Stack
            direction={["column","row"]}
            spacing="6"
            mt="8"
            justify="space-between"
            alignItems="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2" >
                <PaginationButton number={1} isCurrent />
                <PaginationButton number={2} />
                <PaginationButton number={3} />
                <PaginationButton number={4} />
                <PaginationButton number={5} />
            </Stack>
        </Stack>
    );
}