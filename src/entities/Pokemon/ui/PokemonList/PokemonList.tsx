import React, {memo, useCallback} from 'react';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import cls from './PokemonList.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Avatar} from "shared/ui/Avatar/Avatar";
import {AvatarPokemon} from "shared/const /pokemon";
import {Page} from "widgets/Page/Page";
import {
    fetchNextPokemonListPage
} from "pages/PokemonPage/model/services/fetchNextPokemonListPage/fetchNextPokemonListPage";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";


const PokemonList = memo((props:any) => {
    const {data,isLoading,error} = props


    if (!isLoading && !data?.length) {
        return (
            <div >
                error list
            </div>
        );
    }

    if (error) {
        return (
            <div>
                error server
            </div>
        );
    }

    return (
        <div   className={classNames(cls.PokemonList, {}, [])}>
            {data?.map((item:any) => (
                <div  className={classNames(cls.item__block, {}, [])}>
                    <div>
                        <Avatar size={50} src={AvatarPokemon} />
                    </div>

                        <AppLink to={`${RoutePath.pokemon_details}${item.name}`} >
                            <div className={classNames(cls.item__name, {}, [])}>{item.name}</div>
                        </AppLink>
                </div>
            ))}
        </div>

    );
});

export default PokemonList;