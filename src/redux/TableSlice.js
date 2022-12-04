import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    table : {
        number : null
    }
}
export const TableSlice = createSlice({
    name : 'TableSlice',
    initialState,
    reducers :{
        tableNumber : (state,action)=>{
            state.table = action.payload
        }
    }
})

export const {tableNumber}=TableSlice.actions;
export default TableSlice.reducer;