import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from "providers/StoreProvider";
import {PokemonDetails} from "pages/PokemonPage/model/types/pokemonPage";



export const fetchPokemonById = createAsyncThunk<
    PokemonDetails,
    string,
    ThunkConfig<string>
    >(
        'fetchPokemonById',
        async (pokemonName, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<PokemonDetails>(`/v2/pokemon/${pokemonName}`);

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
