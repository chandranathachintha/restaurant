import React from 'react';
import Filter from './container/Filter';
import FoodItems from './container/FoodItems';
import Navbar from './container/Navbar';
import Table from './container/Table';

const Home = () => {
  return (
    <div>
      <center>
            <Navbar />
            <Table />
            <Filter />
            <FoodItems />
      </center>
    </div>
  );
}

export default Home;
