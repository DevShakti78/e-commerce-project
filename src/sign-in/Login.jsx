import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Sinup.css'
import { Googleauth } from './Googleauth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import {userLogin} from '../Redux/Action'


const firebaseConfig = {
  apiKey: "AIzaSyA0LeUN82utX9Ex2JsqxL3PYNsDmWxn-4o",
  authDomain: "auth-development-bf151.firebaseapp.com",
  databaseURL: "https://auth-development-bf151-default-rtdb.firebaseio.com",
  projectId: "auth-development-bf151",
  storageBucket: "auth-development-bf151.appspot.com",
  messagingSenderId: "359153422794",
  appId: "1:359153422794:web:a4c08cb78477afe050bf33"
};
const app = initializeApp(firebaseConfig);



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       YoungerChoice
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const auth = getAuth();
export function SignInSide() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var email = data.get('email')
    var password = data.get('password')
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    
    const user = userCredential.user;
    alert('user succesfully signed in')
    // console.log(userCredential)
   localStorage.setItem("token",userCredential.user.uid)
   dispatch(userLogin(userCredential.user.uid))
   navigate("/address")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className='devcont'>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=2000)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <div className='dev2'><h5 className='dev6'>Login to explore great designs</h5></div>
            <div className='dev3'><h4 className='dev7'>LOGIN WITH YOUR EMAIL ID</h4></div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="https://e-commerce-project-iota.vercel.app/forgotpass" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://e-commerce-project-iota.vercel.app/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  
                </Grid>
              </Grid>
              <Googleauth/>
              <Copyright sx={{ mt: 5 }} />
              
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
}