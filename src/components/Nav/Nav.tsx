import { Link, NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useEffect, useState, } from 'react';
import { getDatabase } from 'firebase/database';


function Nav() {

  interface IUser {
    username: string,
    uid: string,
    email: string
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const [color, setColor] = useState('bg-info')
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
          username: user.displayName,
          uid: user.uid,
          email: user.email
          })
        }
      }
    })
    return (() => {
      userChange()
    })
  }, [color])

  const createUserProfile = (username: string) => {
    const db = getDatabase()
    const myUser = {
      username: username,
      bio:'',
      
    }
  }
  createUserProfile(user.username)

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
      <div className={color}>
        <nav className="navBar">
          <div className='home_btn'>
          <button 
            className='navBtn' 
            onClick={() => {setColor('bg-info')}}
          >
            <Link 
            to='/'
            >
              <img 
              src="https://ih1.redbubble.net/image.4804724672.9890/raf,750x1000,075,t,101010:01c5ca27c6.jpg" 
              alt="D&DLogo"
              width='80px'
              height='90px'
              />
            </Link>
          </button>
          <button className='navBtn'>
            <Link to='/'><h4 className='dmHelper '>The Log Inn</h4></Link>
          </button>
          </div>
          <div 
            className='menu' 
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            <span></span>
            <span></span>
            <span></span>

          </div>
          <ul className={menuOpen ? 'open'  : ''}>
            {user.email ?
              <>
                <button 
                  className='navBtn'
                  onClick={() => {setColor('bg-secondary')}}
                >
                  <li>
                    <NavLink
                      to='/data'
                    >
                      Helper
                    </NavLink>
                  </li>
                </button>
                <button 
                  className='navBtn'
                  onClick={() => {setColor('bg-warning')}} 
                >
                  <li>
                    <NavLink 
                      to='/resources'
                    >
                      Resources
                    </NavLink>
                  </li>
                </button>
                <button 
                  className='navBtn'
                  onClick={() => {setColor('bg-danger')}} 
                >
                  <li>
                    <NavLink 
                      to='/characterSheets'
                    >
                      Character Sheets
                    </NavLink>
                  </li>
                </button>
                <button className='navBtn'>
                  <Link 
                  to='/profileupdate'
                  >
                    <p className="m-2">{user.email}</p>
                  </Link>
                </button>
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
      </div>
    </>
  )
}

export default Nav