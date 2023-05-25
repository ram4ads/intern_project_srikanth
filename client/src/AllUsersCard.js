import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./AllUsersCard.css"

const AllUsersCard = () => {
    const [allUserData, setAllUsersData] = useState([])

    useEffect(() => {
        const FecthingDetails = async() => {
            const response = await axios.get("http://localhost:5000/data");
            console.log(response.data)
            setAllUsersData(response.data)
        }

        FecthingDetails()
    },[])

  return (
    <div className='All-cards'> 
        <h1>All Users Cards</h1>
        <div className='right-side'>
        {
            allUserData.map(eachUser => (
                <div key={eachUser._id} className='All-card-details-containers'>
                    <p><span>FirstName: </span>{eachUser.userFirstName}</p>
                    <p><span>LastName: </span>{eachUser.userLastName}</p>
                    <p><span>DOB: </span>{eachUser.userDOB}</p>
                    <p><span>Email: </span>{eachUser.userEmail}</p>
                    <p><span>Mobile No: </span>{eachUser.userMobileNum}</p>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default AllUsersCard