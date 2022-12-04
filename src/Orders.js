import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './container/Navbar';
const Orders = () => {
  const OrderItem = useSelector(state=>state.OrderReducer.orderItems);
  const tableNumber = useSelector(state=>state.TableReducer.table.number)
  const totalBill = useSelector(state=>state.OrderReducer.totalBill);
  return (
    <div>
      <Navbar />
      <center>
{
    OrderItem.length > 0 ?
    <div className='container'>
      <h2>Your Orders : </h2>
        <div className='row'>
            {
                OrderItem.map((item)=>(
                    <div className='col-md-4' style={{padding:5}} key={item.itemId}  >
                        <div className='card m-2' style={{width:'18rem',padding:'3px'}}>
                        <img src={item.itemUrl} className='card-img-top' />
                        <div className='card-body'>
                            <h5>{item.itemName}</h5>
                            <h6>Table Number :{tableNumber} </h6>
                            <div>Bill Amount Rs.{item.itemPrize}</div>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='mt-4'>
            <h3>Total Bill : Rs.{totalBill} </h3>
        </div>
    </div>
    :
    <div style={{fontSize:30, marginTop:30}}>
        No Orders Placed yet
    </div>
}
</center>

    </div>
  );
}

export default Orders;
