import { FormEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from "firebase/database"


const SignUp = () => {

    interface IUser {
        username: string,
        email: string,
        password: string
    }

    const [currentUser, setCurrentUser] = useState<IUser>({
        username: '',
        email: '',
        password: ''
    })

    const auth = getAuth()
    const user = auth.currentUser
    const db = getDatabase()

    const createUserProfile = (username: string, email:string) => {
        const myUser = {
          username: username,
          bio:'',
        }
        set(ref(db, 'users/' + email), myUser)
        updateProfile(user, {
            displayName: (currentUser.username)
        }).then(() => {
            <span></span>
        }).catch((error) => {
            console.error(error)
        })
      }

    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, currentUser.email, currentUser.password)
    .then((userCredential) => {
        createUserProfile(currentUser.username, userCredential.user.uid)
        navigate('/login')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`)
    });
        
    }
  return (
    <>
        <h1 className='text-center'>DM Helper</h1>
        <img className='authicons w-25 d-block mx-auto m-3' 
        src="https://cdn-icons-png.flaticon.com/512/5455/5455877.png" 
        alt="sign up" 
        />
        <form className="text-center">
            <div className="form-group m-3">
            <label htmlFor="usernameInput">User Name</label>
                <input
                onChange={(event) => {
                    setCurrentUser({...currentUser, username: event.target.value})
                }} 
                type="text" 
                className="form-control" 
                id="usernameInput" 
                placeholder="Username" 
                />
                <br/>
                <label htmlFor="emailInput">Email address</label>
                <input
                onChange={(event) => {
                    setCurrentUser({...currentUser, email: event.target.value})
                }} 
                type="email" 
                className="form-control" 
                id="emailInput" 
                placeholder="Enter email" 
                />
                <small 
                id="emailHelp" 
                className="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            <div className="form-group m-3">
                <label htmlFor="pwInput">Password</label>
                <input
                onChange={(event) => {
                    setCurrentUser({...currentUser, password: event.target.value})
                }} 
                type="password" 
                className="form-control" 
                id="pwInput" 
                placeholder="Password" 
                />
            </div>

            <Button
            variant="contained"
            color="error" 
            onClick={handleSubmit} 
            type="submit" 
            className="btn btn-danger m-3">
                Sign Up
            </Button>
            <br />
            <Link 
            to="/login" 
            >
                {"Already have an account?  Log In!"}
            </Link>
        </form>

    </>
  )
}
export default SignUp