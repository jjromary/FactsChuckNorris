import { Flex, Text, Icon, IconButton, useBreakpointValue, HStack, Stack } from '@chakra-ui/react'
import React from 'react';
import { GiMightyForce } from 'react-icons/gi'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
            justifyContent="center"

        >
            {!isWideVersion && (

                <IconButton
                    aria-label="Open navegation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="8"
                >
                </IconButton>

            )}

            <Text
                fontSize={["3xl", "4xl", "5xl"]}
                fontWeight="bold"
                letterSpacing="tight"
            >Chuck Norris Facts</Text>
            <Icon
                as={GiMightyForce}
                fontSize="5xl"
                ml="8"
            />
        </Flex>
    );
}