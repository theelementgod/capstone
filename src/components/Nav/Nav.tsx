import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useState } from 'react';

function Nav() {

  interface IUser {
    uid: string,
    email: string
  }

  const [user, setUser] = useState<IUser>({
    uid: '',
    email: ''
  })

  onAuthStateChanged(auth, (user) => {
    if (user){
      if (typeof user.email === 'string'){
      setUser({
        uid: user.uid,
        email: user.email
        })
      }
    }
  })
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({
        uid:'',
        email:''
      })
    }).catch((error) => {
      alert(`${error}`)
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            >
          <img
          width="50"
          height="60" 
          src="https://ih1.redbubble.net/image.4804724672.9890/raf,750x1000,075,t,101010:01c5ca27c6.jpg" 
          alt="D&D logo" 
          />
          </IconButton>
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}
          >
            DM Helper
          </Typography>
          {user.email ? (
          <>
            <Link
            to={'/'}
            className='text-light m-3 text-decoration-none'
            >
              Home
            </Link>        
            <Link
            to={'/data'}
            className='text-light m-3 text-decoration-none'
            >
              Resources
            </Link>
            <Link
            to={'/charactersheets'}
            className='text-light m-3 text-decoration-none'
            >
              Character Sheets
            </Link>
            <span className="m-3">{user.email}</span>
            <button onClick={handleSignOut}>Log Out</button>
          </>
          ):(
          <>
            <Link
            to={'/login'}
            className='text-light m-3 text-decoration-none'
            >
                Log In
            </Link>
            <Link
            to={'/signup'}
            className='text-light m-3 text-decoration-none'
            >
              Sign Up
            </Link>
          </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav