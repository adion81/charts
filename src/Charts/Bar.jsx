import Chart from 'react-apexcharts'
import { useState } from 'react';

const Bar = props => {
    
    const [data] = useState(
        {
            series: props.type === "user" ? props.data.map( u => {
                        return {
                            name: `${u.FirstName} ${u.LastName[0]}.`,
                            data: [u.specificMiles(props.act)]
                        } 
                        
                    } ) : 
                        props.type ==="team" ?  props.data.map ( t => {
                            return {
                                name: t.TeamName,
                                data: [t.specificMiles(props.act)]
                            }
                        }) : 
                            null
            ,
            options: {
                chart: {
                    type: 'bar',
                    height: 410,
                    animations: {
                        enabled: true
                    },
                    foreColor: "#f5f5f5"
                },
                legend:{
                    show: true,
                    labels:{
                        colors:["#fff"],
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
                labels:  props.data.map( u => '')
                ,
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
                    align: 'center',
                    offsetY: 30,
                    style:{
                        color: "#fff",
                        fontWeight: '100',
                        fontSize: '25px'
                    }
                    
                    
                },
                categories:["miles"]
            }
        }
    )
    // End of state

    return (
        <div className="col-6 d-flex justify-content-center" >
            {
                props.type ?
                <Chart options={data.options} series={data.series} type={data.options.chart.type} width={props.width}  height={props.height} /> : null
            }
            
        </div>
    )
}

export default Bar;