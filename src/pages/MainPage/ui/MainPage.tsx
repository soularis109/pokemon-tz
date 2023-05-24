import React from 'react';
import PokemonList from "entities/Pokemon/ui/PokemonList/PokemonList";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchPokemonListData} from "entities/Pokemon";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import PokemonPage from "pages/PokemonPage/ui/PokemonPage/PokemonPage";

const MainPage = () => {
    return (
        <div>
         <PokemonPage/>
        </div>
    );
};

export default MainPage;
