import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");

    const handleSubmit = () => {
        navigate("/user/")
    }
  return (
    <>
        <div>
            <div className="login register">
               <h3>Sign Up</h3>
                
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
                        <label htmlFor="name">FullName:</label>
                        <input  
                            onChange={(e) => e.target.value}
                            name={"name"}
                            type="text" className="form-control" 
                            id="name" aria-describedby="usdtHelp"
                            placeholder="Enter Your FullName"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input  
                            onChange={(e) => e.target.value}
                            name={"username"}
                            type="text" className="form-control" 
                            id="username" aria-describedby="usdtHelp"
                            placeholder="Enter your username"
                        />
                        {
                            error === ""? (
                                <></>
                            ): (
                                <small id="usernameHelp" className="form-text text-muted">
                            Username has been taken</small>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-address">Address:</label>
                        <input  
                            onChange={(e) => e.target.value}
                            name={"user-address"}
                            type="text" className="form-control" 
                            id="user-address" aria-describedby="usdtHelp"
                            placeholder="Enter Your Addresss"
                        />
                    </div>
                    
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
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input  
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            name={confirmPassword}
                            type="password" className="form-control" 
                            id="confirmPass" aria-describedby="password"
                            placeholder="Confirm Your Password"
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Create an Account</button>
                    </div>

                    <div className="forgot">
                        <div className="signup">
                            <a href="/login">already have an account? <span>Log In</span></a>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup