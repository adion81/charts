import Chart from 'react-apexcharts'
import { useState } from 'react';
import chicago from '../assets/img/chicago.jpeg';

const BarImage = props => {
    
    const [data] = useState(
        {
            series: [
                {
                    name: 'Walk',
                    data: [
                        props.type === "user" ?
                            props.data.specificMiles("walk") :
                                null
                    ]
                    
                },
                {
                    name: 'Run',
                    data: [
                        props.type === "user" ?
                            props.data.specificMiles("run") :
                                null
                    ]
                },
                {
                    name: 'Bike',
                    data: [
                        props.type === "user" ?
                            props.data.specificMiles("bike") :
                                null
                    ]
                }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 410,
                    animations: {
                        enabled: true
                    }
                },
                legend:{
                    show: false,
                    labels:{
                        colors:["#fff"]
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '100%',

                    },
                },
                dataLabels: {
                    enabled: false,
                    style:{
                        colors:["#fff"]
                    }
                },
                stroke: {
                    colors: ["#ffffff"],
                    width: 0.5
                },
                labels: ["walk","run","bike"],
                xaxis:{
                    labels :{
                        style: {
                            colors: ["#fff"]
                        }
                    },
                    title:{
                        text: "Miles",
                        style:{
                            color: "#fff"
                        }
                    }
                },
                tooltip:{
                    enabled: true,
                    theme: 'dark',
                    x:{
                        show:false
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: ["#fff"]
                        }
                    },
                    
                    
                },
                grid: {
                    position: 'back',
                    row: {
                        colors: ['#001E61']
                    }
                },
                title: {
                    text: `${props.title}`,
                    align: 'right',
                    offsetY: 30,
                    style:{
                        color: "#fff",
                        fontWeight: '100',
                        fontSize: '15px'
                    }
                    
                    
                },
                fill: {
                    type: 'image',
                    opacity: 1,
                    image: {
                        src: [chicago],
                        width: props.width,
                        height: props.height
                    }
                }
                // theme: {
                //     monochrome: {
                //         enabled: true,
                //         color: '#255aee',
                //         shadeTo: 'light',
                //         shadeIntensity: 0.65
                //     }
                // }
            }
        }
    )
    // End of state

    return (
        <div className="col-4 d-flex justify-content-center" >
            {
                props.data ?
                <Chart options={data.options} series={data.series} type={data.options.chart.type} width={props.width}  height={props.height + 100} /> : null
            }
            
        </div>
    )
}

export default BarImage;