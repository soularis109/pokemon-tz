import { createAsyncThunk } from '@reduxjs/toolkit';
import {ThunkConfig} from "app/providers/StoreProvider";
import {PokemonPage, PokemonList} from "pages/PokemonPage/model/types/pokemonPage";
import {getPokemonListLimit, getPokemonListOffset} from "pages/PokemonPage/model/selectors/pokemonList";
import {addQueryParams} from "shared/lib/url/addQueryParams/addQueryParams";


interface FetchPokemonListProps {
    replace?: boolean;
}
export const fetchPokemonListData = createAsyncThunk<
    PokemonList[],
    FetchPokemonListProps,
    ThunkConfig<string>
    >(
        'fetchPokemonListData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue,getState } = thunkApi;
            const offset = getPokemonListOffset(getState())
            const limit = getPokemonListLimit(getState())

            try {
                const response = await extra.api.get<PokemonPage>(`/v2/pokemon/`,{
                    params: {
                        offset:offset,
                        limit:limit
                    },
                });

                if (!response.data.results) {
                    throw new Error();
                }

                return response.data.results;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
