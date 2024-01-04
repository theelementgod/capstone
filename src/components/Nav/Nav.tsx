import { Link, NavLink } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useState } from 'react';


function Nav() {

  interface IUser {
    uid: string,
    email: string
  }

  const {menuOpen, setMenuOpen} = useState(false)
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
    <>
      <nav className="navBar">
        <Link 
        to='/'
        >
          <img src="https://ih1.redbubble.net/image.4804724672.9890/raf,750x1000,075,t,101010:01c5ca27c6.jpg" 
          alt="D&DLogo"
          width='50px'
          height='60px' 
          />
        </Link>
        <div className='menu' onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
          
        </div>
        <ul className={menuOpen ? 'open'  : ''}>
          {user.email ?
            <>
              <li>
                <NavLink to='/resources'>Resources</NavLink>
              </li>
              <li>
                <NavLink to='/characterSheets'>Character Sheets</NavLink>
              </li>
              <p className="m-2">{user.email}</p>
              <button className='logout_btn' onClick={handleSignOut}>Log Out</button>
              </>
             : 
              <>
              <li>
                <NavLink to='/signup'>Sign Up!</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Log In!</NavLink>
              </li>
              </>
          }
        </ul>
      </nav>
    </>
  )
}

export default Nav