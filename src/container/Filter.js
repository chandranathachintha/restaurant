import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { fiterFoodItem } from '../redux/FilterSlice';
const Filter = () => {
    const itemTypes = ['All Items','Rice Items','Pizza','Cold Drinks','Hot Drinks'];
    const [filter, setFilter] = useState('All Items');
    const dispatch = useDispatch();
    
   
  return (
    <div>
        <center className='mt-3'>
            <span className='h4 m-2' >Filter : </span>
            <select name='filter' className='p-1 me-1' onChange={(e)=>dispatch(fiterFoodItem({item:(e.target.value)}))}>
                {
                    itemTypes.map((item,index)=>{
                        return(
                            <option key={index}>{item}</option>
                        )
                    })
                }
            </select>
    
        </center>
    </div>
  );
}

export default Filter;
