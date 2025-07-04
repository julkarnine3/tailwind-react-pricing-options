import { Fullscreen } from 'lucide-react';
import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';



const resultData =
  [
    {
      "id": 1,
      "name": "Tarek",
      "Math": 80,
      "Physics": 75,
      "Chemistry": 85
    },
    {
      "id": 2,
      "name": "Tanjil",
      "Math": 90,
      "Physics": 88,
      "Chemistry": 92
    },
    {
      "id": 3,
      "name": "Aparup",
      "Math": 70,
      "Physics": 65,
      "Chemistry": 78
    },
    {
      "id": 4,
      "name": "Shakaet",
      "Math": 85,
      "Physics": 80,
      "Chemistry": 87
    },
    {
      "id": 5,
      "name": "Jishan",
      "Math": 95,
      "Physics": 90,
      "Chemistry": 93
    },
    {
      "id": 6,
      "name": "Shakib",
      "Math": 60,
      "Physics": 70,
      "Chemistry": 65
    },
    {
      "id": 7,
      "name": "Riya",
      "Math": 75,
      "Physics": 72,
      "Chemistry": 78
    },
    {
      "id": 8,
      "name": "Shreya",
      "Math": 88,
      "Physics": 85,
      "Chemistry": 90
    },
    {
      "id": 9,
      "name": "Joy",
      "Math": 82,
      "Physics": 79,
      "Chemistry": 84
    },
    {
      "id": 10,
      "name": "Mily",
      "Math": 68,
      "Physics": 74,
      "Chemistry": 70
    }
  ]



const ResultCharts = () => {

    return (
        <div>
            <LineChart width={1000} height={500} className='items-center mx-auto mt-3 p-4' data={resultData}>
                <Line dataKey="Math" type="monotone" stroke="#aaa">
                     <Legend></Legend>
                </Line>
               
                <Line dataKey="Physics" ></Line>
                <Line dataKey="Chemistry" stroke="red"></Line>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default ResultCharts;