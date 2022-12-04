import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems:[],
    totalBill : 0
}
export const OrderSlice = createSlice({
    name : 'orderSlice',
    initialState,
    reducers :{
        increaseOrderItems : (state,action)=>{
            state.orderItems.push(action.payload)
            const bill = state.orderItems.map(item=>item.itemPrize)
            const tBill = bill.reduce((a,b)=>a+b)
            state.totalBill = tBill;
        }
        
    }
})

export const {increaseOrderItems} = OrderSlice.actions;
export default OrderSlice.reducer;