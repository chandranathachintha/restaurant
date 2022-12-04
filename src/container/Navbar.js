import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const numItems = useSelector(state=>state.OrderReducer.orderItems)
  
  
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
           <Link to = '/' className='text-decoration-none '> <span className='navbar-brand' style={{marginLeft:20}} >Restaurant</span></Link>
           <Link to="/Orders">
           <button className='btn btn-primary' style={{marginRight:20}}>
                Orders <span className='badge bg-secondary'>{numItems.length}</span>
            </button>
           </Link>
        </nav>
    </div>
  );
}

export default Navbar;
