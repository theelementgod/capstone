import { FormEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    interface IUser {
        email: string,
        password: string
    }

    const [user, setUser] = useState<IUser>({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigate('/login')
        // ...
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
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                onChange={(event) => {
                    setUser({...user, email: event.target.value})
                }} 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder="Enter email" 
                />
                <small 
                id="emailHelp" 
                className="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            <div className="form-group m-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                onChange={(event) => {
                    setUser({...user, password: event.target.value})
                }} 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
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