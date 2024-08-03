// import Password from 'antd/es/input/Password'
import React, { useState } from 'react'
import { FaEye,FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'


export default function  Login() {
    let Navigate = useNavigate()
    
    const [showPassword , setShowPassword] = useState(false)
    const togglePasswordVisibility = () =>{
        setShowPassword(!showPassword);
    }
        //Email Format
        let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        //Functionality
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
    
        const handleLogin = (e) => {
            e.preventDefault();
            if(!emailFormat.test(email)){
                alert("Please type your email properly")
                return;
            }
            if(password.length<6){
                alert("Password must be atleast six character")
                return;
            }
            let user = {
                email,
                password
            }
        let users = JSON.parse(localStorage.getItem("users"))
        const finduser = users.find(element => element.email === user.email)
   if (finduser) {
      const findpassword = users.find(element => element.password === password)
      if(findpassword){
         alert("Congratulation you are successfully login")
         Navigate("/frontend")
      }else{
         alert("Password enter are wrong")
         return
      }
   }
   else{
    alert("Invalid email and password")
   }
        }
        // else{
        //     alert("Invalid email and password")
        //     return;
        // }
   
  return (
    <main>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card p-4 text-center">
                        <form onSubmit={handleLogin}>
                            <h2 className='mb-4'>Login</h2>
                           <div>
                           <input type="email" placeholder='Type Your Email' name='email' className='form-control my-4' value={email}
                           onChange={(e)=>setEmail(e.target.value)} />
                           </div>
                           <div className='icon'>
                           <input type={showPassword ? "text" : "password"} placeholder='Type Your Password' id='pass' name='password' className='form-control my-4' value={password}
                           onChange={(e)=>setPassword(e.target.value)} />
                           <i onClick={togglePasswordVisibility} className='iconimg' style={{fontSize:25}}>
                           {showPassword ? <FaEyeSlash/> : <FaEye/>}
                           </i>
                           </div>
                            <div style={{textAlign:'right'}}>
                            <p>Don't have an account? <Link to='/'>Register here</Link></p>
                            <p><Link to= "/updatePassword">Update Password</Link></p>
                           <p><Link to= "/forgetPassword">Forget Password</Link></p> 
                           </div>  
                            <button className='btn btn-success my-1'>Submit</button> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
