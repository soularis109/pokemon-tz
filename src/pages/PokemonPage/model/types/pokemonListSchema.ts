import {PokemonList} from "pages/PokemonPage/model/types/pokemonPage";


export interface PokemonListSchema {
    isLoading: boolean;
    error?: string;
    data?: PokemonList[];
    search?:string
    sort?:string
    dataContainer?:PokemonList[]
    offset:number
    limit:number
    hasMore:boolean
}
