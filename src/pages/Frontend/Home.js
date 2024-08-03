import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card d-flex justify-content-center align-items-center p-4">
             <h3>To see how many todos are available click on the button <Link className='btn btn-success text-center mt-3' to='/todos'>Show Todos</Link></h3>
            </div>
          </div>
          <div className="col-6">
          <div className="card d-flex justify-content-center align-items-center p-4">
             <h3>To see how many users are available click on the button <Link className='btn btn-success text-center mt-3' to='/users'>Show Users</Link></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
