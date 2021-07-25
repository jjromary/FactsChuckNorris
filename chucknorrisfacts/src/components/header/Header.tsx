import { Flex, Text, Icon } from '@chakra-ui/react'
import { GiMightyForce } from 'react-icons/gi'

export function Header(){
    return(
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
            <Text
               fontSize='5xl'
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