import Chart from 'react-apexcharts'
import { useState } from 'react';


const Gauge = props => {
    const [data] = useState({
        series: [props.percentage],
        options: {
            chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                    enabled: true
                },
                foreColor: "#fff"
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: '#001E61',
                        strokeWidth: '97%',
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: '#999',
                            opacity: 1,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: '22px'
                        },
                        style: {
                            colors: "#fff"
                        }
                    },
                    hollow: {
                        size: '60%'
                    },
                    size: 0,
                    colors: undefined,
                    strokeColors: '#fff',
                    strokeWidth: 2,
                    strokeOpacity: 0.9,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    discrete: [],
                    shape: "circle",
                    radius: 2,
                    offsetX: 0,
                    offsetY: 0,
                    onClick: undefined,
                    onDblClick: undefined,
                    showNullDataPoints: true,
                    hover: {
                        size: undefined,
                        sizeOffset: 3
                    }
                }
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 53, 91]
                },
            },
            labels: ['Completion To Goal', 'Monies Raised'],
            title: {
                text: 'Completion To Goal',
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '30px',
                    fontWeight: '100',
                    fontFamily: undefined,
                    color: '#f5f5f5'
                },
            },
            annotations: {
                position: 'front'
            }

        },


    })

    return (
        <div className="col-6 d-flex justify-content-center align-items-center" >


            <Chart options={data.options} series={data.series} type={data.options.chart.type} width={props.width} height={props.height + 100} />


        </div>
    )
}

export default Gauge


