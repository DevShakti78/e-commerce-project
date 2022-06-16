import React,{useState,useEffect} from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useSelector,useDispatch } from 'react-redux';
import {ProdData} from '../Redux/Action';
import Button from '@mui/material/Button';
import  axios  from 'axios';
import { BrowserRouter, Link ,useNavigate} from 'react-router-dom';
const Siderbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleSorted = (order) => {
    axios
      .get(`https://fashionltd.herokuapp.com/productData?_sort=price&_order=${order}`)
      .then(({ data }) => {
        dispatch(ProdData(data));
        console.log(data)
      });
  };
  const handleSortedfilter = () => {

    navigate("/product/men")
    // axios
    //   .get(`https://fashionltd.herokuapp.com/productData?catog=${order}`)
    //   .then(({ data }) => {
    //     dispatch(ProdData(data));
    //     console.log(data)
    //   });
  };
  const handleColorfilter = (order) => {
    axios
      .get(`https://fashionltd.herokuapp.com/productData?color=${order}`)
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
<Button href='https://e-commerce-project-iota.vercel.app/product/men'>Men</Button>
<Button href='https://e-commerce-project-iota.vercel.app/product/women'>Women</Button>
<Button href='https://e-commerce-project-iota.vercel.app/product/kids'>Kids</Button>
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
</ProSidebar>
    </div>
  )
}

export default Siderbar