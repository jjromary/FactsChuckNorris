import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { FaRandom, FaList } from 'react-icons/fa'

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start" >
                <Box>
                    <Text fontWeight="bold" color="gray.200" fontSize="xll">VIEW MODE </Text>
                    <Stack spacing="4"mt="8"align="stretch">
                        <Link display="flex" alignItems="center" >
                            <Icon as={FaList} fontSize="20"/>
                            <Text ml="4" fontWeight="medium" letterSpacing="wide">List</Text>
                        </Link>
                        <Link display="flex" alignItems="center" >
                            <Icon as={FaRandom} fontSize="20"/>
                            <Text ml="4" fontWeight="medium" letterSpacing="wide">Random</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}