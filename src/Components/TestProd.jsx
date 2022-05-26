import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { ProdData } from '../Redux/Action'

const TestProd = () => {
    const [data,SetData] = useState("")
    const dispatch = useDispatch()
    const item = useSelector((e)=>e)
    useEffect(() => {
      
       axios.get("https://fashionltd.herokuapp.com/productData").then(({data})=>{
         //console.log(data)
         dispatch(ProdData(data))
       })
    
    }, []);
    
  return (
    <div>
      
    </div>
  )
}

export default TestProd