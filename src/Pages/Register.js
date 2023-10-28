import React from 'react'

export const Register = () => {
    // Hooks Area 


    // Method Area 
    const RegisterFunc=()=>{
        let userInputVal = document.getElementById("InputUsername").value
        let emailInputVal = document.getElementById("exampleInputEmail1").value
        let passInputVal = document.getElementById("exampleInputPassword1").value
        fetch(`${URL}/api/auth/local/register`,{
            method : 'POST',
            headers :{
               "Content-Type" :  "application/json"
            },
            body : JSON.stringify({
                                    "username": userInputVal,
                                    "email": emailInputVal,
                                    "password": passInputVal
                                })
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            if(data.data === null){
                alert(`${data.error.message}`)
            }else
            window.location.href = '/login'
            console.log(data.data)
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            console.log('Register Fetching Done')
        })
    }

    // Return Area 
  return (
    <main>
        <form className='mt-5'>
            <h1>Register</h1>
            <div className="mb-3">
                <label htmlFor="InputUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="InputUsername" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            
            <button type="button" className="btn btn-primary" onClick={()=>{RegisterFunc()}}>Submit</button>
        </form>

    </main>
  )
}
