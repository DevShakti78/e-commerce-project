import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
const Siderbar = () => {
  return (
    <div>
<ProSidebar string="https://t4.ftcdn.net/jpg/02/62/24/31/360_F_262243135_q7xBjfg02gaeD1NVfIqHBLz3qrOMFYcw.jpg">
  <Menu iconShape="square">
    <MenuItem>Dashboard</MenuItem>
    <SubMenu title="Catogeries">
      <MenuItem>Men</MenuItem>
      <MenuItem>Women</MenuItem>
      <MenuItem>Kids</MenuItem>
    </SubMenu>
    <SubMenu title="Sort By Price">
      <MenuItem>High To Low</MenuItem>
      <MenuItem>Low To High</MenuItem>
    </SubMenu>
    <SubMenu title="Filter By Color">
      <MenuItem>Red</MenuItem>
      <MenuItem>Blue</MenuItem>
      <MenuItem>White</MenuItem>
      <MenuItem>Pink</MenuItem>
      
    </SubMenu>
  </Menu>
</ProSidebar>;
    </div>
  )
}

export default Siderbar