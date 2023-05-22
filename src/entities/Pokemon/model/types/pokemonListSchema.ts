import {PokemonList} from "entities/Pokemon";


export interface PokemonListSchema {
    isLoading: boolean;
    error?: string;
    data?: PokemonList[];
}
