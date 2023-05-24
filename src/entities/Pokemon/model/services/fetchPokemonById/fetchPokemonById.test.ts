import {fetchPokemonById} from "entities/Pokemon/model/services/fetchPokemonById/fetchPokemonById";
import {TestAsyncThunk} from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";


const data = {
   name:'charmander',
    moves:[
        {name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/"},
        {name: "mega-punch2", url: "https://pokeapi.co/api/v2/move/5/"}
    ],
    stats:[
        {base_stat: 39, effort: 0, stat: {name: "hp", url: "https://pokeapi.co/api/v2/stat/1/"}},
        {base_stat: 40, effort: 0, stat: {name: "hp", url: "https://pokeapi.co/api/v2/stat/1/"}}
    ]
};

describe('fetchPokemonById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchPokemonById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchPokemonById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
