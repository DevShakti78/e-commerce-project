import {React,useEffect} from 'react'
import Itemcard from './Itemcard'
import  axios  from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import {ProdData} from '../Redux/Action';

const KidsSection = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
   
      axios
        .get(`https://fashionltd.herokuapp.com/productData?catog=kids`)
        .then(({ data }) => {
          dispatch(ProdData(data));
          console.log("data",data)
         
        });
  
   
      
    
  },[])
  useEffect(()=>{
   
    axios
      .get(`https://fashionltd.herokuapp.com/productData?catog=kids`)
      .then(({ data }) => {
        dispatch(ProdData(data));
        console.log("data",data)
       
      });
},[])
    const item = useSelector((e)=>(e.reducer.product))
    //console.log(item)
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

export default KidsSection