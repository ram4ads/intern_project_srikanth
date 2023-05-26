import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./CardTemplate.css";

const CardTemplate = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [allUserData, setAllUsersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/MyData");
                const userDataArray = Object.entries(response.data);
                setAllUsersData(userDataArray);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
        <div className='container'>
        <h2>My Details Are</h2>
            {
                allUserData.map(([key,value],index) => {
                    if(["password","confirmPassco", "__v", "_id"].includes(key)){
                        return null
                    }
                    return (
                        <>
                        {
                            value.includes("image") ? (
                                <div className='card-styles'>
                                    <span>{key}: </span><img src={value} alt = "pic"  width={100} height={100}/>
                                </div>
                            ) : (
                                <div className='card-styles'>
                                    <p><span>{key}: </span> {value}</p>
                                </div>
                            )
                        }
                        </>
                    )
                })}

            </div>
        </>
    );
};

export default CardTemplate;
