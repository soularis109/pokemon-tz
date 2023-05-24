import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {
    fetchNextPokemonListPage
} from "pages/PokemonPage/model/services/fetchNextPokemonListPage/fetchNextPokemonListPage";
import {fetchPokemonListData} from "pages/PokemonPage/model/services/fetchPokemonListData/fetchPokemonListData";


jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextPokemonListPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextPokemonListPage, {
            pokemonPage: {
                offset:0,
                limit:20
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchPokemonListData).toHaveBeenCalledWith({ limit: 60 });
    });
    test('fetchNextPokemonListPage not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextPokemonListPage, {
            pokemonPage: {
                offset:0,
                limit:20
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchPokemonListData).not.toHaveBeenCalled();
    });
});
