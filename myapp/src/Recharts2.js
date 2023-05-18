import React ,{useState, useEffect}from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import axios from 'axios';


const Recharts2 = () => {
    const [timeData, setTimeData] = useState([]);

    useEffect(() => {
        const ApiCal = async () => {
            const DateAndTime = await axios.get("http://localhost:5000/dateAndTime");
            setTimeData(DateAndTime.data)
        }
        ApiCal()
    },[])


  return (
    <div>
        <div>
            <BarChart width={1100} height={400} data={timeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="interval_range" interval={1}/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="link1" fill="#a44c9e" barSize={8} />
                <Bar dataKey="link2" fill="#82ca9d" barSize={8} />
            </BarChart>
            </div>
    </div>
  )
}

export default Recharts2