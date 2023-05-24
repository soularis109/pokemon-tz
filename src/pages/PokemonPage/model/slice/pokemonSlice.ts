import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchPokemonListData} from 'pages/PokemonPage/model/services/fetchPokemonListData/fetchPokemonListData';
import {PokemonListSchema} from "pages/PokemonPage/model/types/pokemonListSchema";
import {PokemonList} from "pages/PokemonPage/model/types/pokemonPage";

const initialState: PokemonListSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    search:'',
    sort:'abc',
    dataContainer:[],
    offset:0,
    limit:0,
    hasMore: true,
};

export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {
        filteredList: (state, action:PayloadAction<string>) => {
            state.data = state?.dataContainer?.filter(item =>
                item.name.toLowerCase().includes(action.payload))
        },
        sortList: (state, action:PayloadAction<string>) => {
            state.data = state?.dataContainer?.sort((a,b) =>
                a.name?.localeCompare(action.payload) - b.name?.localeCompare(action.payload))
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        },
        setOffset: (state, action: PayloadAction<number>) => {
            state.offset = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonListData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPokemonListData.fulfilled, (
                state,
                action: PayloadAction<PokemonList[]>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.dataContainer = action.payload
            })
            .addCase(fetchPokemonListData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {actions: pokemonSliceActions} = pokemonSlice;
export const {reducer: pokemonSliceReducer} = pokemonSlice;
