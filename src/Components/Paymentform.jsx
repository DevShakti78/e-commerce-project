import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { width } from '@mui/system';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function PaymentForm() {

  const total = localStorage.getItem("react-use-cart")
  const total_price = JSON.parse(total)
   const paytotal = total_price.cartTotal
   const totalitems = total_price.totalItems
  console.log(total_price.cartTotal)
  const userDetail = JSON.parse(localStorage.getItem("userDetail"))
  console.log(userDetail)
  return (
    
  <>
  <div>
    <div style={{border:'2px'}}>
     <hr />
      <h4>Shipping Address :-</h4>
      <h4>Name:{userDetail.name} from {userDetail.address}</h4>
      <h4>Pincode: {userDetail.pincode} State: {userDetail.state}</h4>
      <hr />
    </div>
      <h3>Total Payable Amount: {paytotal}</h3>
      <h4>To Paynow Enter Card Details</h4>
      <hr />
      <img style={{width:"60%"}} src="https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg" alt="" />
      </div>
    <div className="card" style={{width:"500px", marginLeft:'100px',marginTop:"25px"}}>
      
    <div className="card-body">
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <Button href='https://e-commerce-project-iota.vercel.app/product' onClick={()=> {alert("payment succes")}} variant="contained" endIcon={<SendIcon />}>
       Pay Now
      </Button>
    </React.Fragment>
    </div>
</div>
</>
  );
}