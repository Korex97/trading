import "./Login.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const details = {
        username: "admin@exmaple.com",
        password: "haarkoredey"
    }
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(""); 

    const handleSubmit = () => {
        // if (email !== details.username || password !== details.password){
        //     setError("Invalid username or password")
        // }else{
        //     navigate("/user/");
        // }
        navigate("/user/")
    }

  return (
    <>
        <div>
            <div className="login">
               <h3>Sign In</h3>
                
                {
                    error === "" ? (
                        <></>
                    ):(
                        <div className="error">
                            <div className="message">
                                Invalid Username or Password
                            </div>
                        </div>
                    )
                }

               <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input  
                            onChange={(e) => setEmail(e.target.value)}
                            name={"email"}
                            value= {email}
                            type="text/email" className="form-control" 
                            id="usdtAddress" aria-describedby="usdtHelp"
                            placeholder="Enter Your Email or Username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input  
                            onChange={(e) => setPassword(e.target.value)}
                            name={password}
                            type="password" className="form-control" 
                            id="password" aria-describedby="password"
                            placeholder="Enter Your Password"
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
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