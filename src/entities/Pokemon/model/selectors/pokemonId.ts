import {StateSchema} from "app/providers/StoreProvider";


export const getPokemonIdData = (state: StateSchema) => state.pokemonDetails?.data;
export const getPokemonIdIsLoading = (state: StateSchema) => state.pokemonDetails?.isLoading || false;
export const getPokemonIdError = (state: StateSchema) => state.pokemonDetails?.error;
