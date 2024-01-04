import { Link, NavLink, useNavigate, redirect } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useEffect, useState, } from 'react';


function Nav() {

  interface IUser {
    username: string,
    uid: string,
    email: string
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState<IUser>({
    username:'',
    uid: '',
    email: ''
  })



  useEffect(() => {
    const userChange = onAuthStateChanged(auth, (user) => {
      if (user){
        if (typeof user.email === 'string'){
        setUser({
          username: user.username,
          uid: user.uid,
          email: user.email
          })
        }
      }
    })
    return (() => {
      userChange()
    })
  }, [])

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({
        username:'',
        uid:'',
        email:''
      })
      navigate('/login')
    }).catch((error) => {
      alert(`${error}`)
    });
  }

  return (
    <>
      <nav className="navBar">
        <div className='home_btn'>
        <Link 
        to='/'
        >
          <img src="https://ih1.redbubble.net/image.4804724672.9890/raf,750x1000,075,t,101010:01c5ca27c6.jpg" 
          alt="D&DLogo"
          width='50px'
          height='60px'
          />
        </Link>
          <Link to='/'><h3 className='dmHelper '>DM Helper</h3></Link>
        </div>
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
                <NavLink to='/data'>Helper</NavLink>
              </li>
              <li>
                <NavLink to='/resources'>Resources</NavLink>
              </li>
              <li>
                <NavLink to='/characterSheets'>Character Sheets</NavLink>
              </li>
              <Link to='/profileupdate'><p className="m-2">{user.email}</p></Link>
              <button 
              className='logout_btn m-2' 
              onClick={handleSignOut}
              >
                Log Out
              </button>
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