
import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useFacts } from "../../services/hooks/useFacts";

interface PaginationItemProps  {
    isCurrent?: boolean;
    number: number;    
}

export function PaginationButton({ isCurrent= false, number }: PaginationItemProps) {   


    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                colorScheme="red"
                disabled
                _disabled={{
                    bgColor: 'red.500',
                    cursor: 'default'
                }}
            > {number}
            </Button>
        );
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            bg="gray.700"
            _hover={{
                bgColor: 'gray.500'
            }}
            >
                <Box>
                   {number}
                </Box>
        </Button>
    );
}