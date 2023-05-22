import React, {useEffect} from 'react';
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {pokemonListReducer} from "entities/Pokemon/model/slice/pokemonListSlice";
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonListData} from "entities/Pokemon/model/services/fetchPokemonListData/fetchPokemonListData";
import {getPokemonListData} from "entities/Pokemon/model/selectors/pokemonList";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
const reducers: ReducersList = {
    pokemonList: pokemonListReducer,
};

const PokemonList = () => {
    const dispatch = useAppDispatch()
    const data = useSelector(getPokemonListData)
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchPokemonListData())
    },[dispatch])
    console.log(data)

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            Pokemon
        </DynamicModuleLoader>
    );
};

export default PokemonList;