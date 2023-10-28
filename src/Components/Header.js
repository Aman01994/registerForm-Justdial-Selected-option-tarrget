import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  // Hook Area 


  // Method Area 
  const myLogout=()=>{
    window.localStorage.removeItem('Token')
    window.location.href = '/login'
  }
  // Return Area 
  return (
    <>  <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Justdial</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {
                      window.localStorage.getItem('Token') == undefined &&
                      <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    }
                   
                    {
                      window.localStorage.getItem('Token') == undefined &&
                      <li className="nav-item">
                      <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    }
                    
                    
                    <li className="nav-item">
                    <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                    </li>
                    {
                       window.localStorage.getItem('Token') &&
                       <li className="nav-item">
                      <Link className="nav-link" onClick={()=>myLogout()}>Logout</Link>
                    </li>
                    }
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
