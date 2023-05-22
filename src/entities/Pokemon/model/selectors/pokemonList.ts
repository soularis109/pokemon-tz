import {StateSchema} from "providers/StoreProvider";


export const getPokemonListData = (state: StateSchema) => state.pokemonList?.data;
export const getPokemonListIsLoading = (state: StateSchema) => state.pokemonList?.isLoading || false;
export const getPokemonListError = (state: StateSchema) => state.pokemonList?.error;
