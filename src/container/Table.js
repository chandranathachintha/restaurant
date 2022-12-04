import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { tableNumber } from '../redux/TableSlice';

const Table = () => {
    const num = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    const inActiveBtn = 'btn btn-outline-primary m-2';
    const activeBtn = 'btn btn-outline-primary m-2 active';
    const dispatch = useDispatch();
    const number = useSelector(state=>state.TableReducer.table.number)
  return (
    <div>
        <center className='mt-3'>
            <h4>Please select your table number :</h4>
            {
                num.map((tableNo,index)=>{
                    return(
                        <div style={{display:'inline'}} key={index}>
                            <button className={number===tableNo?activeBtn:inActiveBtn} 
                                    onClick={()=>{dispatch(tableNumber({
                                                    number : tableNo
                                                    }))}}
                                    >
                                        {tableNo}
                            </button>
                        </div>
                    )
                })
            }
        </center>
    </div>
  );
}

export default Table;
