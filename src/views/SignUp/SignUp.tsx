import { FormEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from "firebase/database"


const SignUp = () => {

    interface IUser {
        username: string,
        email: string,
        password: string
    }

    const [user, setUser] = useState<IUser>({
        username: '',
        email: '',
        password: ''
    })

    const createUserProfile = (username: string, email:string) => {
        const db = getDatabase()
        const myUser = {
          username: username,
          bio:'',
        }
        set(ref(db, 'users/' + email), myUser)
      }

    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        createUserProfile(user.username, userCredential.user.uid)
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
        <img className='w-25 d-block mx-auto m-3' 
        src="https://cdn-icons-png.flaticon.com/512/5455/5455877.png" 
        alt="sign up" 
        />
        <form className="text-center">
            <div className="form-group m-3">
            <label htmlFor="usernameInput">User Name</label>
                <input
                onChange={(event) => {
                    setUser({...user, username: event.target.value})
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
                    setUser({...user, email: event.target.value})
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
                    setUser({...user, password: event.target.value})
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