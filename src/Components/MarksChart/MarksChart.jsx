import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData =marksDataRes.data;
    // Data processing for the chart
    const marksChartData = marksData.map(studentData => {
        const student ={
            id: studentData.id,
            name: studentData.name,
            math: studentData.results.math,
            physics: studentData.results.physics,
            chemistry: studentData.results.chemistry
        }
        const avg = (student.math + student.physics + student.chemistry)/3;
        student.avg = avg;
        return student;
    });

    return (
        <div>
            <BarChart width={800} height={400} data={marksChartData} className='items-center mx-auto mt-3 p-4'>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='blue'></Bar>
                <Bar dataKey="math" fill='black'></Bar>
                <Bar dataKey="physics" fill='yellow'></Bar>

                <Tooltip ></Tooltip>
                <Legend></Legend>

            </BarChart>
        </div>
    );
};

export default MarksChart;