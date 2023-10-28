import React from 'react'
import { URL } from '../Helpers/URL'
export const Login = () => {
    // Hooks Area 


    // Method Area 
        const myLogin=()=>{
            // let e = document.querySelector('input[type="email"]').value
            // let p = document.querySelector('input[type="password"]').value
            // console.log(e)
            // console.log(p)
            fetch(`${URL}/api/auth/local`,{
                method: 'POST',
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                                        "identifier": document.querySelector('input[type="email"]').value,
                                        "password": document.querySelector('input[type="password"]').value
                                    })
            }).then((res)=>{
                return res.json()})
            .then((data)=>{
                if(data.data === null){
                    alert(`${data.error.message}`)
                }else
                alert(`Welcome ${data.user.username}`)
                window.localStorage.setItem('Token',data.jwt)
                window.location.href = '/business_submit'
                console.log(data)
            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{console.log('Done Fetching')})
        }

    // Return Area 
  return (
            <main>
                <form className='mt-5'>
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={()=>{myLogin()}}>Submit</button>
                </form>
        </main>
  )
}
