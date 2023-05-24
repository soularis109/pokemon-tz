import {PokemonDetails} from "pages/PokemonPage/model/types/pokemonPage";

export interface pokemonDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: PokemonDetails;
}
