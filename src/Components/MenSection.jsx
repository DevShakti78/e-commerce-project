import React, { useEffect,useState } from 'react'
import Itemcard from './Itemcard'
import  axios  from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import {ProdData} from '../Redux/Action';
import Button from '@mui/material/Button';

const MenSection = () => {
const [men,setMen] = useState(null);

    const dispatch = useDispatch();
    
  useEffect(()=>{
   
      axios
        .get(`https://fashionltd.herokuapp.com/productData?catog=men`)
        .then(({ data }) => {
          dispatch(ProdData(data));
          console.log("data",data)
         
        });
  
   
      
    
  },[])
  useEffect(()=>{
   
    axios
      .get(`https://fashionltd.herokuapp.com/productData?catog=men`)
      .then(({ data }) => {
        dispatch(ProdData(data));
        console.log("data",data)
       setMen(data)
      });
},[])
        
  
const handleSorted = (prop,asc) => {
  men.sort(function(a, b) {
    if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
    } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
    }
});
};
    const item = useSelector((e)=>(e.reducer.product))
   // console.log(item)
    return (
      <>
  <div className='justify-content-center'>
    <h3>sort by price</h3>
  <Button onClick={() => handleSorted()}>High To Low</Button>
  <Button>Low To High</Button>
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

export default MenSection