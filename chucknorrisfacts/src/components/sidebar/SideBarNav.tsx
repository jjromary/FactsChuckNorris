import { Stack } from "@chakra-ui/react";
import React from "react";
import { FaList, FaRandom } from "react-icons/fa";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start" >
            <NavSection title="VIEW MODE">
                <NavLink icon={FaList}>List</NavLink>
                <NavLink icon={FaRandom}>Random</NavLink>
            </NavSection>
        </Stack>
    );
}