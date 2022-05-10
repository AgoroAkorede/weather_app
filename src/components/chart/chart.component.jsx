import React from 'react'
import { Line } from 'react-chartjs-2'
import {useState} from 'react'
import {Chart as ChartJs, BarElement} from 'chart.js/auto'



const ChartComponent = ({chartData}) => {
    return (
        <div>
            <Line 
                height={ 200 }
                width={300}
                data={chartData}
                options={ {
                    maintainAspectRatio:false
                } }
                
            />
            
        </div>
    )
}

// const ChartComponent = () => {
//     // const [ data, setData ] = useState([])
//     const data= {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     }

//     const options = {
//         maintainAspectRatio:false,
        
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }

//     return (
//         <div>
//             <Line  
//                 data={data}
//                 height={ 200 }
//                 width={300}
//                 options={ options }
//                 backgroundColor="rgb(255,255,255)"
            
//             />
           
           
            
//         </div>
//     )
// }

export default ChartComponent
