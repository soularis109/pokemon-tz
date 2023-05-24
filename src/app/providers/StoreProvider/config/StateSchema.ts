import {AnyAction, EnhancedStore, Reducer, ReducersMapObject,} from '@reduxjs/toolkit';
import {CombinedState} from 'redux';
import {AxiosInstance} from 'axios';
import {PokemonListSchema} from "pages/PokemonPage/model/types/pokemonListSchema";
import {pokemonDetailsSchema} from "entities/Pokemon/model/types/pokemonDetailsSchema";
import {ScrollPositionSchema} from "features/ScrollPosition";

export interface StateSchema {
    scrollPosition:ScrollPositionSchema
    pokemonList?: PokemonListSchema;
    pokemonDetails?: pokemonDetailsSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
