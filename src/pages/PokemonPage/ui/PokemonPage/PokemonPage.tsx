import React, {useCallback, useEffect} from 'react';
import PokemonFilters from "pages/PokemonPage/ui/PokemonFilters/PokemonFilters";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./PokemonPage.module.scss";
import PokemonList from "entities/Pokemon/ui/PokemonList/PokemonList";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {pokemonSliceReducer} from "pages/PokemonPage/model/slice/pokemonSlice";
import {Page} from "widgets/Page/Page";
import {
    fetchNextPokemonListPage
} from "pages/PokemonPage/model/services/fetchNextPokemonListPage/fetchNextPokemonListPage";
import {useSelector} from "react-redux";
import {
    getPokemonListData,
    getPokemonListError,
    getPokemonListIsLoading
} from "pages/PokemonPage/model/selectors/pokemonList";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducersList = {
    pokemonList: pokemonSliceReducer,
};
const PokemonPage = () => {
    const data = useSelector(getPokemonListData)
    const isLoading = useSelector(getPokemonListIsLoading)
    const error = useSelector(getPokemonListError)

    const dispatch = useAppDispatch();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextPokemonListPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

                <div className={classNames(cls.PokemonPage, {}, [])}>
                    {/*<PokemonFilters/>*/}
                    <div>Pokemon List - {data?.length}</div>
                    <Page
                        onScrollEnd={onLoadNextPart}
                        className={classNames(cls.PokemonList, {}, [])}
                    >
                    <PokemonList data={data} isLoading={isLoading} error={error}/>
                    </Page>
                </div>

        </DynamicModuleLoader>
    );
};

export default PokemonPage;