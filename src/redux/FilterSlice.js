import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
      filterItem : {
          item : 'All Items'
      }  
        
    
}

export const FilterSlice = createSlice({
    name : 'filterSlice',
    initialState,
    reducers : {
        fiterFoodItem : (state,action)=>{
            state.filterItem =action.payload
        }
        
    }
})
export const {fiterFoodItem}=FilterSlice.actions;
export default FilterSlice.reducer;