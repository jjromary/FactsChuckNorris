import { Box, Stack } from "@chakra-ui/react";
import { FaRandom, FaList } from 'react-icons/fa'
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start" >
                <NavSection title="VIEW MODE">
                   <NavLink icon={FaList}>List</NavLink>
                   <NavLink icon={FaRandom}>Random</NavLink>
                </NavSection>
            </Stack>
        </Box>
    );
}