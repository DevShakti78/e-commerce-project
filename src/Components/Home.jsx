import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react'
import AutoplayExample from './Homeslideshow'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];


function PricingContent() {
 
  const [token1,setToken1] = useState("")

  var token = localStorage.getItem('token')

// React.useEffect(()=>{
//   setToken1(tokens.user?.uid || "null")
// },[])

  

console.log(token1)
  const [itemCount, setItemCount] = React.useState(1);
  const state = useSelector((e)=>e.login.token)
  return (
    <React.Fragment>
     
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Younger Choice ltd
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search… "
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <nav>
         
          <Link
           variant="button"
           color="text.primary"
           href="https://e-commerce-project-iota.vercel.app/product"
           sx={{ my: 1, mx: 1.5 }}
         >
           Features
         </Link>
         
            
            
             <Link
              variant="button"
              color="text.primary"
              href="https://e-commerce-project-iota.vercel.app/product"
              sx={{ my: 1, mx: 1.5 }}
              
            >
              New Arrived
            </Link>
            
            
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Kids Zone
            </Link>
          </nav>
          <Button onClick={()=>console.log("here")} href="https://e-commerce-project-iota.vercel.app/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
          <Button onClick={()=>localStorage.setItem("token","")}>
            
          </Button>
          <Link
              variant="button"
              color="text.primary"
              href="http://localhost:3000/product"
              sx={{ my: 1, mx: 1.5 }}
            >
              <AddShoppingCartIcon/>
            </Link>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
     
      {/* End hero unit */}
     
      {/* Footer */}
     
      {/* End footer */}
     
    </React.Fragment>
    
  );
}

export default PricingContent