import {StateSchema} from "app/providers/StoreProvider";


export const getPokemonListData = (state: StateSchema) => state.pokemonList?.data;
export const getPokemonListIsLoading = (state: StateSchema) => state.pokemonList?.isLoading || false;
export const getPokemonListError = (state: StateSchema) => state.pokemonList?.error;
export const getPokemonListSearch = (state: StateSchema) => state.pokemonList?.search ?? '';
export const getPokemonListSort = (state: StateSchema) => state.pokemonList?.sort ?? 'abc';
export const getPokemonListOffset = (state: StateSchema) => state.pokemonList?.offset ?? 0;
export const getPokemonListLimit = (state: StateSchema) => state.pokemonList?.limit ?? 20;
export const getPokemonListHasMore = (state: StateSchema) => state.pokemonList?.hasMore;
