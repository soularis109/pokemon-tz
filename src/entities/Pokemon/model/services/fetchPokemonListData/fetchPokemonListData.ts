import { createAsyncThunk } from '@reduxjs/toolkit';
import {ThunkConfig} from "providers/StoreProvider";
import {PokemonList} from "entities/Pokemon";


export const fetchPokemonListData = createAsyncThunk<
    PokemonList[],
    string,
    ThunkConfig<string>
    >(
        'fetchPokemonListData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<PokemonList[]>(`/`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
