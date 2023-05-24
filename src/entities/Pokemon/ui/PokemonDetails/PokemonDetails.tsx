import React, {useEffect} from 'react';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getPokemonIdData, getPokemonIdError, getPokemonIdIsLoading} from "entities/Pokemon/model/selectors/pokemonId";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {pokemonDetailsSliceReducer} from "entities/Pokemon/model/slice/pokemonDetailsSlice";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {fetchPokemonById} from "entities/Pokemon/model/services/fetchPokemonById/fetchPokemonById";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./PokemonDetails.module.scss";
import {Button} from "shared/ui/Button/Button";
import {AvatarPokemon} from "shared/const /pokemon";


const reducers: ReducersList = {
    pokemonDetails: pokemonDetailsSliceReducer,
};
const PokemonDetails = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const data = useSelector(getPokemonIdData)
    const isLoading = useSelector(getPokemonIdIsLoading)
    const error = useSelector(getPokemonIdError)
    const navigate = useNavigate();


    if (error) {
        return (
            <div>
                error server
            </div>
        );
    }
    useEffect(() => {
        if (id) {
            dispatch(fetchPokemonById(id))
        }
    },[dispatch])
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <div  className={classNames(cls.PokemonDetails, {}, [])}>
                <div>
                    <Avatar size={300} src={AvatarPokemon} />
                    <div className={classNames(cls.name, {}, [])}>
                       Name - {data?.name}
                    </div>
                </div>
                <br></br>
                <div>
                    <div> Moves</div>
                    <div className={classNames(cls.PokemonDetailsMoves, {}, [])}>
                        {data?.moves.map((item,index) => (
                            <div key={index}>
                                <div>
                                    {item?.move?.name}
                                </div>
                                <div>
                                    {/*{item?.version_group_details.map((detail) => (*/}
                                    {/*    <>*/}
                                    {/*        <div>{detail?.level_learned_at}</div>*/}
                                    {/*        <div>{detail?.move_learn_method}</div>*/}
                                    {/*        <div>{detail?.version_group}</div>*/}
                                    {/*    </>*/}
                                    {/* */}
                                    {/*))}*/}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <br></br>
                <div>
                    <div>Stats</div>
                    <div>
                        {data?.stats.map((itemStat,index) => (
                            <div key={index}>
                                <div>Name - {itemStat?.stat?.name}</div>
                                <div>
                                   Base Stat - {itemStat?.base_stat}
                                </div>
                                {/*<div>*/}
                                {/*    {item?.version_group_details.map((detail) => (*/}
                                {/*        // <div>{detail.}</div>*/}
                                {/*    ))}*/}
                                {/*</div>*/}

                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </DynamicModuleLoader>

    );
};

export default PokemonDetails;