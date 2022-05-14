import React from 'react'
import Itemcard from './Itemcard'
import data from './data'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Cartitems = () => {
  return (
    <>
<h1 className='text-center mt-3'>All items</h1>
<div className='justify-content-center'>
<FormControl sx={{ m: 1, minWidth: 180 }} size="small">
      <InputLabel id="demo-select-small">Sort by price</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Sort by price"
       
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Low To High</MenuItem>
        <MenuItem value={20}>High To Low</MenuItem>
        <MenuItem value={30}>All item</MenuItem>
      </Select>
    </FormControl>
</div>
<section className='py-4 container'>
<div className='row justify-content-center'>
{data.productData.map((item,index)=>{
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