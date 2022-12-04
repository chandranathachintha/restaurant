import {configureStore} from '@reduxjs/toolkit';
import TableReducer from './TableSlice';
import OrderReducer from './OrderSlice';
import FilterReducer from './FilterSlice';
export const store = configureStore({
    reducer :{
        TableReducer : TableReducer,
        OrderReducer : OrderReducer,
        FilterReducer : FilterReducer
    }
})