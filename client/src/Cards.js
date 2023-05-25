import React, { useEffect, useState } from 'react'
import "./Cards.css"
import axios from 'axios';

const Cards = ({userDetails}) => {
    // const [data,setData] = useState([]);

    // useEffect(() => {
    //     const FetchingDetails = async() =>  {
    //         const response = await axios.get("http://localhost:5000/MyData");
    //         setData(response.data);
    //     }
    //     FetchingDetails()
    // })


    return ( 
        <div className='container'>
            <h2 className='my-details-heading'>Your Submitted details are: </h2>
            <div className='My-card-container'>
                <div className='all-card-containers'>
                    <p><span>FirstName :</span> {userDetails.userFirstName}</p>
                </div>
                <div className='all-card-containers'>
                <p><span>LastName :</span> {userDetails.userLastName}</p>
                </div>
                <div className='all-card-containers'>
                    <p><span>DOB: </span>{userDetails.userDOB}</p>
                    </div>
                    <div className='all-card-containers'>
                    <p><span>Email: </span> {userDetails.userEmail}</p>
                </div>
                <div className='all-card-containers'>
                    <p><span>Mobile: </span> {userDetails.userMobileNum}</p>
                </div>

                {/* <div className='all-card-containers sign-photo-container'> */}
                    <div className='all-card-containers photo-contaienr'>
                        <p>Photo: </p>
                        <img src={userDetails.userCapturedImge} alt="Userpic" height={75} width={130} />
                    </div>
                    <div className='all-card-containers sign-container'>
                        <p>Sign: </p>
                        <img src={userDetails.userSignature} alt="UserSign" height={75} width={130} />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Cards