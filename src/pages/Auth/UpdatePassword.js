import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function UpdatePassword() {
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const [email,setEmail] = useState("")
    const [oldPassword,setOldPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const handleUpdate = (e) =>{
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.email === email && user.password === oldPassword);

    if (userIndex === -1) {
      alert('Old password is incorrect or user not found.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords does not match with each other")
      return;
    }
    users[userIndex].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Password updated successfully.');
    }
  return (
      <main>
     <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card p-4 text-center">
                            <form onSubmit={handleUpdate}>
                                <h2 className='mb-4'>Update Password</h2>
                                <div>
                                    <input type="email" placeholder='Type Your Email' className='form-control my-4' name='email' value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className='icon'>
                                    <input type={showPassword ? "text" : "password"} placeholder='Old Password' className='form-control my-4' name='oldPassword' value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}/>
                                    <i onClick={togglePasswordVisibility} className='iconimg ' style={{ fontSize: 25 }}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </i>
                                </div>
                                <div className='icon'>
                                    <input type={showPassword ? "text" : "password"} placeholder='New Password' className='form-control my-4' name='newPassword' value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}/>
                                    <i onClick={togglePasswordVisibility} className='iconimg ' style={{ fontSize: 25 }}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </i>
                                </div>
                                <div className='icon'>
                                    <input type={showPassword ? "text" : "password"} placeholder='Confirm Password' className='form-control my-4' name='confirmPassword' value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    <i onClick={togglePasswordVisibility} className='iconimg ' style={{ fontSize: 25 }}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </i>
                                </div>
                                <button className='btn btn-success my-1'>Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    
  )
    }
