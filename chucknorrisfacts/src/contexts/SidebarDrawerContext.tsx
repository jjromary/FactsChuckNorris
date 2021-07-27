import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContex = createContext({} as UseDisclosureReturn);

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps){
    
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    },[disclosure, router.asPath])
    
    return(
        <SidebarDrawerContex.Provider value={disclosure}>
            {children}
        </SidebarDrawerContex.Provider>
    );
}

// criando hook próprio

export const useSidebarDrawer = () => useContext(SidebarDrawerContex)

