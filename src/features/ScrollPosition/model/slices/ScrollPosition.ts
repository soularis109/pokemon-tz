import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ScrollPositionSchema} from '../types/ScrollPositionSchema';

const initialState: ScrollPositionSchema = {
    scroll: {},
};

export const scrollPosition = createSlice({
    name: 'ScrollPosition',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: scrollPositionActions } = scrollPosition;
export const { reducer: scrollPositionReducer } = scrollPosition;
