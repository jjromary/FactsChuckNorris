import { Stack } from "@chakra-ui/react";
import { FaList, FaInfo } from "react-icons/fa";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start" >
            <NavSection title="VIEW MODE">
                <NavLink icon={FaList} href="/list">List</NavLink>
                <NavLink icon={FaInfo} href="/about">About</NavLink>
            </NavSection>
        </Stack>
    );
}