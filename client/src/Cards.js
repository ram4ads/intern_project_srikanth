import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./App.css"

const Cards = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        const ApiCal = async() => {
            const response = await axios("http://localhost:5000/data");
            setData(response.data)
            console.log(response.data)
        }
        ApiCal()
    },[])


  return (
    <div>
        <h3>The user details</h3>
    <div className='card-container'>
            {
                data.map(eachUser => (
                    <div key = {eachUser._id} className='inside-card-contaienr'>
                        <p>user : {eachUser.userFirstName}</p>
                        <p>{eachUser.userLastName}</p>
                        <p>{eachUser.userDOB}</p>
                        <p>{eachUser.userEmail}</p>
                        <p>{eachUser.userMobileNum}</p>
                        <img src = {eachUser.userPhoto} alt = "userPic" height={100} width={100}/>
                        <img src = {eachUser.userSignature} alt='UserSignature' height={100} width={100}/>
                    </div>
                ))
            }
    </div>
    </div>
  )
}

export default Cards