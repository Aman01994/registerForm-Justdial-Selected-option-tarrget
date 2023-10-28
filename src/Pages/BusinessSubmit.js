import React, { useState } from 'react'
import { useEffect } from 'react';
import { URL } from '../Helpers/URL';


export const BusinessSubmit = () => {
  // Hook Area 
  const [category, setCategory] = useState([])
  const [city,setCity] = useState([])
  // Method Area 
    useEffect(()=>{
    fetch(`${URL}/api/business-categories`).then((res)=>{
      return res.json()
    }).then((data)=>{
      // console.log(data.data)
      setCategory(data.data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      console.log('category Fetch Done')
    })
  }, []);

  useEffect(()=>{
    fetch(`${URL}}/api/cities`).then((res)=>{
      return res.json()
    }).then((data)=>{
      // console.log(data.data)
      setCity(data.data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      console.log('city Fetch Done')
    })
  },[])

  const businessSubmission=()=>{
    let business_Name = document.getElementById('InputBusinessName').value
    let business_Cat_Id = document.querySelector('select[id="InputBusinessCategory"]').value
    let selected_City = document.getElementById('InputCity').value
    console.log(business_Cat_Id)
      fetch( `${URL}/api/businesses`,{
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "data": {
          "name": business_Name,
          "business_category": business_Cat_Id,
          "cities": [
            selected_City
          ]
        }
      })
    }).then((res)=>{
      if(res.status !== 200){
        alert('Error')
      }else
      return res.json()
    }).then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      console.log('data submitted')
    })
  }
  // Return Area 
  return (<>
    <main>
    <form className='mt-5 container'>

                    <h1 className='mb-3'>Business Registration</h1>
                    <div>
                    <label htmlFor="InputBusinessCategory" className="form-label">Business Category</label>
                      <select className="form-select mb-3" aria-label="Default select example" id='InputBusinessCategory'>
                        {
                          category.map((cv,index,arr)=>{
                            return <option value={cv.id} key={index}>{cv.attributes.name}</option>
                          })
                        }
                      </select>
                      <label htmlFor="InputCity" className="form-label">City</label>
                      <select className="form-select mb-3" aria-label="Default select example" id='InputCity'>
                        {
                          city.map((cv,index,arr)=>{
                            return   <option value={cv.id} key={index}>{cv.attributes.name}</option>
                          })
                        }

                      </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="InputBusinessName" className="form-label">Business Name</label>
                        <input type="text" className="form-control" id="InputBusinessName"  />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={()=>{businessSubmission()}} >Submit</button>
                </form>
    </main>
    </>
  )
}
