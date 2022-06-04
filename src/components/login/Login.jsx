import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getToken, login, reset } from "../../app/actions/authSlice";
import Error from "../error/Error";
import Success from "../error/Success";



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success_message, setMessage] = useState(""); 
    const [error, setError] = useState(""); 


    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth);

    useEffect(() => {
        
        if (isError){
            setError(message)
        }

        if (user){
            setMessage(user.message)
        }else{
            setMessage("")
        }

        if (isSuccess && user){
            navigate("/user");
        }

        dispatch(reset())

    }, [user, isError,  isSuccess, message, navigate, dispatch])

    const handleSubmit = () => {
        if (email.length === 0 || password.length === 0 ){
            setError("Please Enter your Login Details");
        }else{
            const credentials = {
                username: email,
                password: password,
            }
            dispatch(login(credentials))
        }
    }

  return (
    <>
        <div>
            <div className="login">
               <h3>Sign In</h3>
               {
                   success_message === "" ? (
                       <></>
                   ) : (
                        <Success message={`${success_message}, Kindly Login`} />
                   )
               }
                
                {
                    error === "" ? (
                        <></>
                    ):(
                        <Error error={error} />
                    )
                }

               <form action="" onSubmit={(e) => {
                   e.preventDefault();
                   handleSubmit();
               }}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input  
                            onChange={(e) => setEmail(e.target.value)}
                            type="text/email" className="form-control" 
                            id="usdtAddress" aria-describedby="usdtHelp"
                            placeholder="Enter Your Email or Username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input  
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" className="form-control" 
                            id="password" aria-describedby="password"
                            placeholder="Enter Your Password"
                        />
                    </div>

                    <div className="form-group">
                        {
                            isLoading ? (
                                <button disabled className="btn btn-primary">
                                    <span 
                                        className="spin spinner-border spinner-border-sm" 
                                        role={"status"} aria-hidden="true" /> Authenticating...
                                    </button>
                            ): (
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            )
                        }
                        
                        
                    </div>

                    <div className="forgot">
                        <div className="forgot_link">
                            <a href="/forgot_pass">forgot password?</a>
                        </div>

                        <div className="signup">
                            <a href="/signup">Create an Account</a>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login