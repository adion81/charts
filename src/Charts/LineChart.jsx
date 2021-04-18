import Chart from 'react-apexcharts'
import { useState } from 'react';
import userCalc from '../models/calcs/userStatCalc.model';



const dates = [
    "2021-03-10T00:00:00","2021-03-11T00:00:00","2021-03-12T00:00:00","2021-03-13T00:00:00","2021-03-14T00:00:00","2021-03-15T00:00:00","2021-03-16T00:00:00","2021-03-17T00:00:00","2021-03-18T00:00:00","2021-03-19T00:00:00","2021-03-20T00:00:00","2021-03-21T00:00:00","2021-03-22T00:00:00","2021-03-23T00:00:00"
];
const options = {  month: 'short', day: 'numeric' };



const LineChart = props => {
    console.log(Date.now())
    console.log(new Date(Date.now()))
    const [data] = useState({
        series: [
            {
                name: "Walks",
                data: dates.map( d => new userCalc(props.users).specificAllUserMilesPerDay("walk",d) )
            },
            {
                name: "Runs",
                data: dates.map( d => new userCalc(props.users).specificAllUserMilesPerDay("run",d) )
            },
            {
                name: "Bikes",
                data: dates.map( d => new userCalc(props.users).specificAllUserMilesPerDay("bike",d) )
            }

        ],
        options: {
            chart: {
                height: 400,
                type: 'line',
                zoom: {
                    enabled: true
                },
                foreColor:"#f5f5f5"
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: props.title,
                align: 'left',
                style:{
                    color:"#fff"
                }
            },
            grid: {
                row: {
                    colors: ['#001E61'], // takes an array which will be repeated on columns
                    
                },
            },
            xaxis: {
                
                categories: dates.map( d =>  new Date(d).toLocaleDateString("EN",options)),
                labels :{
                    style: {
                        colors:dates.map(d => "#fff")
                    }
                },
            },
            tooltip:{
                enabled: true,
                theme:'dark'
            }
        },


    })
    return (
        <div className="col-6 d-flex justify-content-center">
            <Chart 
                options={data.options}
                series={data.series}
                type={data.options.chart.type}
                height={400}
                width={700}
            />
        </div>
    )
}

export default LineChart;