import { FormEvent, useState } from "react"
import Button from "@mui/material/Button"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"


const LogIn = () => {
  interface User {
    username: string,
    email: string,
    password: string
  }

  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleSubmit= (event: FormEvent) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate('/')
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
      <div className="login-page">
        <h1 className="text-center">DM Helper</h1>
        <img 
        className='authicons d-block w-25 mx-auto m-3' 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMbA4-dej-vTE6KD8HRtxEFHfvOWzyU21wQ&usqp=CAU" 
        alt="sign up" 
        />
        <form className="text-center" onSubmit={handleSubmit}>
            <div className="form-group m-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                onChange={(event) => {
                  setUser({...user, email: event.target.value})}} 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder="Enter email" 
                />
            </div>
            <div className="form-group m-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                onChange={(event) => {
                  setUser({...user, password: event.target.value})}} 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password" 
                />
            </div>

            <Button 
            type="submit"
            variant="contained"
            color="success" 
            className="btn btn-success m-3">
            Log In
            </Button>
            <br />
            <Link
            to="/signup" 
            >
                {"Don't have an account?  Sign Up!"}
            </Link>
        </form>
      </div>
    </>
  )
}
export default LogIn