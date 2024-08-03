import  Footer  from '../../components/Footer'
import  Header  from '../../components/Header'
import React from 'react'
import { Link } from 'react-router-dom'

export default function UsersPage() {
  let users = JSON.parse(localStorage.getItem("users"))
  return (
    <>
    <Header/>
    <main className='bg-white'>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center text-success mb-5'>Show all users in table</h1>
            <div style={{ textAlign: 'right', }}>
              <Link to='/' className='btn btn-info mb-4' id='button'>Add User</Link>
            </div>
            <div className='table-responsive'>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Unique-Id</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th>1</th>
                  <td>Adil Ali</td>
                  <td>adil@gmail.com</td>
                  <td>2153821</td>
                  <td>egf967nrxy3</td>
                </tr>
                {users.map((user, i) => {
                  const { fullName , email, password ,Id } = user
                  return <tr key={i}>
                    <th scope="row">{i + 2}</th>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{Id}</td>
                    </tr>
                })}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}
