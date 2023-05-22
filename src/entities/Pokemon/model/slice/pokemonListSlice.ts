import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchPokemonListData} from '../services/fetchPokemonListData/fetchPokemonListData';
import {PokemonListSchema} from "entities/Pokemon/model/types/pokemonListSchema";
import {PokemonList} from "entities/Pokemon";

const initialState: PokemonListSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const pokemonListSlice = createSlice({
    name: 'pokemonListSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonListData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPokemonListData.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.data = action.payload.results;
            })
            .addCase(fetchPokemonListData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: pokemonListActions } = pokemonListSlice;
export const { reducer: pokemonListReducer } = pokemonListSlice;
