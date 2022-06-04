import { useEffect, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd"; 
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Error from "../error/Error";
import { register, reset } from "../../app/actions/authSlice";


const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [other_name, setOtherName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone_number, setPhone] = useState();
    const [date, setDate] = useState(null);
    const [error, setError] = useState("");

    const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth); 

    useEffect(() => {
        if (isError){
            setError(message)
        }
        if (isSuccess && user){
            navigate("/login");
        }

        dispatch(reset())

    }, [user, isSuccess, isError, message, navigate, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword){
            setError("Password Does not match");
        }
        if (first_name.length === 0  || last_name.length === 0 || other_name.length === 0 ||
            email.length === 0 || password.length === 0){
                setError("One or More Fields is Empty");
        }
        else{
            const user = {
                first_name,
                last_name,
                other_name,
                email,
                password,
                date_of_birth: date.format("YYYY-MM-DD"),
                phone_number: phone_number.toString()
            }
            dispatch(register(user))
        }   
        
    }
    const showRequirements = (id) => {
        const element = document.getElementById(id);
        element.classList.add("requirements")
    }
    const handleDateChange = value => {
        setDate(value);
    }
    const checkPassword = (pass) => {
        var output = {
            long: false,
            number: false,
            upper: false,
            lower: false
        }
        if (/[a-z]/.test(pass)) output.lower = true
        if (/[A-Z]/.test(pass)) output.upper = true
        if (/[0-9]/.test(pass)) output.number = true
        if (pass.length >= 8)  output.long = true 
        
        return output
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
                        <Error error={error} />
                    )
                }

               <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname">Firstname:</label>
                        <input  
                            onChange={(e) => setFirstName(e.target.value)}
                            value={first_name}
                            type="text" className="form-control" 
                            id="firstname" aria-describedby="usdtHelp"
                            placeholder="Enter Your Firstname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname:</label>
                        <input  
                            onChange={(e) => setLastName(e.target.value)}
                            name={"lastname"}
                            value={last_name}
                            type="text" className="form-control" 
                            id="lastname" aria-describedby="usdtHelp"
                            placeholder="Enter Your Lastname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="othername">Other Name:</label>
                        <input  
                            onChange={(e) => setOtherName(e.target.value)}
                            name={"othername"}
                            value={other_name}
                            type="text" className="form-control" 
                            id="othername" aria-describedby="usdtHelp"
                            placeholder="Enter Your Othername"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date of Birth:</label>
                        <DatePicker 
                            className="form-control"
                            placeholder="Enter Your Date of Birth"
                            format={"DD-MM-YYYY"}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-address">Phone Number:</label>
                        <PhoneInput
                            inputClass="react-tel-input form-control" 
                            country={'ng'}
                            value={phone_number}
                            onChange={phone => setPhone(phone)}
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
                            onFocus={(e) => {
                                showRequirements("passDetails");
                            }} 
                            onChange={(e) => {
                                setPassword(e.target.value);
                                const result = checkPassword(password);
                                if (result.upper){
                                    document.getElementById("upper").classList.add("green")
                                }else{
                                    document.getElementById("upper").classList.remove("green")
                                }
                            }}
                            name={password}
                            type="password" className="form-control" 
                            id="password" aria-describedby="password"
                            placeholder="Enter Your Password"
                        />
                        <div id="passDetails">
                            <div id="length">
                                <AiOutlineCheckCircle />
                                <small>contains up to 8 characters</small>
                            </div>
                            <div id="number">
                                <AiOutlineCheckCircle />
                                <small>contains a number</small>
                            </div>
                            <div id="lower">
                                <AiOutlineCheckCircle />
                                <small>contains a lowercase</small>
                            </div>
                            <div id="upper">
                                <AiOutlineCheckCircle />
                                <small>contains an uppercase</small>
                            </div>
                        </div>
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
                        {
                            isLoading ? (
                                <button className="btn btn-primary">
                                    <span 
                                        className="spin spinner-border spinner-border-sm" 
                                        role={"status"} aria-hidden="true" />Creating...
                                </button>

                            ) : (
                                <button type="submit" className="btn btn-primary">Create an Account</button>
                            )
                        }
                        
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