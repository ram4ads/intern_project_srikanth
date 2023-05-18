import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { PieChart, Pie, Cell} from "recharts"

import axios from 'axios';

const Recharts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const ApiCal = async () => {
            const response = await axios.get("http://localhost:5000/poll");
            // const DateAndTime = await axios.get("http://localhost:5000/dateAndTime");
            setData(response.data);
            console.log("rpie charts data", response.data)
        }
        ApiCal()
    },[])


    return (
        <div>
            <h1>ReCharts</h1>
            <BarChart width={600} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Link_Type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>

            <PieChart width={600} height={400}>
                <Tooltip />
                <Legend />
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="Link_Type"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label >
                    <Cell name="Link1" fill="#a44c9e" />
                    <Cell name="Link2" fill="#b3d23f" />
                </Pie>
            </PieChart>

        </div>
    )
}

export default Recharts