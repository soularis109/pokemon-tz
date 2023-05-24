import {createAsyncThunk} from '@reduxjs/toolkit';

import {
    getPokemonListHasMore,
    getPokemonListIsLoading, getPokemonListLimit,
} from "pages/PokemonPage/model/selectors/pokemonList";
import {pokemonSliceActions} from "pages/PokemonPage/model/slice/pokemonSlice";
import {ThunkConfig} from "providers/StoreProvider";
import {fetchPokemonListData} from "pages/PokemonPage/model/services/fetchPokemonListData/fetchPokemonListData";

export const fetchNextPokemonListPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        // const hasMore = getArticlesPageHasMore(getState());
        const limit = getPokemonListLimit(getState());
        const isLoading = getPokemonListIsLoading(getState());
        const hasMore = getPokemonListHasMore(getState());

        if (hasMore && !isLoading) {
            dispatch(pokemonSliceActions.setLimit(limit + 20));
            dispatch(fetchPokemonListData({}));
        }
    },
);
