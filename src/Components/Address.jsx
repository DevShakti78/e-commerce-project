import * as React from 'react';
import {useState} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function AddressForm() {
  const total = localStorage.getItem("react-use-cart")
 const total_price = JSON.parse(total)
  const paytotal = total_price.cartTotal
  const totalitems = total_price.totalItems
 console.log(total_price.cartTotal)
 const [name,setName] = useState("");
 const [address,setAddres] = useState("");
 const [pincode,setPincode] = useState("");
 const [state,setState] = useState("")
 console.log(name,address,pincode,state)
 const saveUser=()=>{
  localStorage.setItem("userDetail",JSON.stringify({name,address,pincode,state}))
 }
 
  return (
    <>
    <div><h3 style={{color:"red"}}>You need to pay {paytotal} for total of {totalitems} items</h3>
    <br />
    <h3>Add address To Start Paying</h3>
    </div>
    <div className="card" style={{width:"500px", marginLeft:'100px',marginTop:"25px"}}>
    
    <div className="card-body">
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e)=>{
setName(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e)=>{
              setAddres(e.target.value)
                          }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(e)=>{
              setState(e.target.value)
                          }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e)=>{
              setPincode(e.target.value)
                          }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      <Button onClick={saveUser} href='https://e-commerce-project-iota.vercel.app/payment' variant="contained" endIcon={<SendIcon />}>
        Next
      </Button>
    </React.Fragment>
    </div>
</div>
</>
  );
}