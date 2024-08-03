import React, { useState } from 'react'

export default function ForgetPassword() {
    const [email,setEmail] = useState("")
    function handleShowPassword(e){
   e.preventDefault();
   let users = JSON.parse(localStorage.getItem("users"))
    let findUser = users.find(user => user.email=== email)
    if(findUser){ 
      return  alert("This is Your Password : " + findUser.password)
    }else{
        alert("Wrong Email")
    }
    }
  return (
    <main>
              <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card p-4 text-center">
                        <form onSubmit={handleShowPassword}>
                            <h2 className='mb-4'>Forget Password</h2>
                           <div>
                           <input type="email" placeholder='Type Your Email' name='email' className='form-control my-4' value={email}
                           onChange={(e)=>setEmail(e.target.value)} />
                           </div>
                            <button className='btn btn-success my-1'>Show Password</button> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
