import React,{useState,useEffect} from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useSelector,useDispatch } from 'react-redux';
import {ProdData} from '../Redux/Action';
import  axios  from 'axios';
const Siderbar = () => {
  const dispatch = useDispatch();
  const handleSorted = (order) => {
    axios
      .get(`http://localhost:8080/productData?_sort=price&_order=${order}`)
      .then(({ data }) => {
        dispatch(ProdData(data));
        console.log(data)
      });
  };
  const handleSortedfilter = (order) => {
    axios
      .get(`http://localhost:8080/productData?catog=${order}`)
      .then(({ data }) => {
        dispatch(ProdData(data));
        console.log(data)
      });
  };
  const handleColorfilter = (order) => {
    axios
      .get(`http://localhost:8080/productData?color=${order}`)
      .then(({ data }) => {
        dispatch(ProdData(data));
        console.log(data)
      });
  };
 
  return (
    <div>
<ProSidebar>
  <Menu iconShape="square">
    <MenuItem>Dashboard</MenuItem>
    <SubMenu title="Catogeries">
      <MenuItem onClick={()=> handleSortedfilter("men")}>Men</MenuItem>
      <MenuItem onClick={()=> handleSortedfilter("women")}>Women</MenuItem>
      <MenuItem onClick={()=> handleSortedfilter("kids")}>Kids</MenuItem>
    </SubMenu>
    <SubMenu title="Sort By Price">
      <MenuItem onClick={() => handleSorted("desc")}>High To Low</MenuItem>
      <MenuItem onClick={() => handleSorted("asc")}>Low To High</MenuItem>
    </SubMenu>
    <SubMenu title="Filter By Color">
      <MenuItem onClick={()=> handleColorfilter("red")}>Red</MenuItem>
      <MenuItem onClick={()=> handleColorfilter("blue")}>Blue</MenuItem>
      <MenuItem onClick={()=> handleColorfilter("white")}>White</MenuItem>
      <MenuItem onClick={()=> handleColorfilter("pink")}>Pink</MenuItem>
      
    </SubMenu>
  </Menu>
</ProSidebar>;
    </div>
  )
}

export default Siderbar