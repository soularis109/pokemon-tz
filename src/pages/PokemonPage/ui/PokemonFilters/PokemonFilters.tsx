import React, {useCallback} from 'react';
import {Input} from "shared/ui/Input/Input";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {pokemonSliceActions} from "pages/PokemonPage/model/slice/pokemonSlice";
import {useSelector} from "react-redux";
import {getPokemonListSearch} from "pages/PokemonPage/model/selectors/pokemonList";
import {fetchPokemonListData} from "pages/PokemonPage/model/services/fetchPokemonListData/fetchPokemonListData";


const PokemonFilters = () => {
    const dispatch = useAppDispatch()
    const search = useSelector(getPokemonListSearch)
    // const sort = useSelector(getPokemonListSort)

    const onChangeSearch = useCallback((search: string) => {
        // dispatch(pokemonSliceActions.filteredList(search))
        dispatch(pokemonSliceActions.setSearch(search))
    }, [dispatch]);
    // const onChangeSort = useCallback((sort: string) => {
    //     dispatch(pokemonSliceActions.sortList(sort))
    //     dispatch(pokemonSliceActions.setSort(sort))
    // }, [dispatch]);

    return (
        <div>
            <Input value={search} onChange={onChangeSearch}/>
        </div>
    );
};

export default PokemonFilters;