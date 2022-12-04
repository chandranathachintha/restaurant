import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { increaseOrderItems } from '../redux/OrderSlice';
const FoodItems = () => {
    const [data, setData] = useState([]);
    const [cloneData, setCloneData] = useState([]);
    useEffect(()=>{
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
            response=>response.json()
        ).then(
            data =>{
                setData(data.items)
                setCloneData(data.items)
            }
        )
    },[])
    const dispatch = useDispatch();
    const filterop = useSelector(state=>state.FilterReducer.filterItem.item)
    useEffect(()=>{
        if(filterop != 'All Items'){
            let specific = cloneData.filter(item=>filterop==item.category)
            setData(specific)
        }
        else{
            setData(cloneData)
        }
    },[filterop])
    const number = useSelector(state=>state.TableReducer.table.number)
    const handleOrder = (itemname,itemprize,itemurl,itemid)=>{
       if(number != null){
        alert("Order Placed Successfully...")
        dispatch(increaseOrderItems({
            itemName : itemname,
            itemPrize : itemprize,
            itemUrl : itemurl,
            itemId : itemid
        }))
       }
       else{
        alert("Please Select the table Number...")
       }
    }
  return (
    <div>
        <center>
            {
                data.length > 0 ?
                <div className='container'>
                    <div className='row'>
                        {
                            data.map((item)=>(
                                <div className='col-md-4' style={{padding:5}} key={item.id}  >
                                    <div className='card m-2' style={{width:'18rem',padding:'3px'}}>
                                    <img src={item.url} className='card-img-top' />
                                    <div className='card-body'>
                                        <h5>{item.name}</h5>
                                        <div>Rs.{item.prize}</div>
                                        <button className='btn btn-primary mt-2'
                                                onClick={()=>handleOrder(item.name,item.prize,item.url,item.id)}>Order</button>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                :
                <div>

                </div>
            }
        </center>
    </div>
  );
}

export default FoodItems;
