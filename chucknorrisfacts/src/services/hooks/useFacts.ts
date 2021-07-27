import { useQuery } from "react-query";
import { api } from "../api";


interface Facts {
    id: number;
    joke: string;
    categories: string;
}

// função para fazer fetching dados dos usuários
export async function getFacts(): Promise<Facts[]> {
    const { data } = await api.get('/jokes');
    
    const value = data.value.map(value => {
        return {
            id: value.id,
            joke: value.joke,
            categories: value.categories,
        };
    });

    return value;
    
}



export function useFacts() {

    return (
        useQuery('facts', getFacts,
            {
                staleTime: 1000 * 5,
            })
    );



}