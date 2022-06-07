import React from 'react'
import Itemcard from './Itemcard'
import data from './data'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

const Cartitems = () => {
  const item = useSelector((e)=>(e.reducer.product))
  console.log(item)
  return (
    <>
<div className='justify-content-center'>

</div>
<section className='py-4 container'>
<div className='row justify-content-center'>
{
item.map((item,index)=>{

return(
<Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
)
})}



</div>

</section>
    </>
  )
}

export default Cartitems