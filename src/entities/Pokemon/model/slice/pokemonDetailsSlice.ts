import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {pokemonDetailsSchema} from "entities/Pokemon/model/types/pokemonDetailsSchema";

import {PokemonDetails} from "pages/PokemonPage/model/types/pokemonPage";
import {fetchPokemonById} from "entities/Pokemon/model/services/fetchPokemonById/fetchPokemonById";

const initialState: pokemonDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const pokemonDetailsSlice = createSlice({
    name: 'pokemonDetailsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPokemonById.fulfilled, (
                state,
                action:PayloadAction<PokemonDetails>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPokemonById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: pokemonDetailsSliceActions } = pokemonDetailsSlice;
export const { reducer: pokemonDetailsSliceReducer } = pokemonDetailsSlice;
