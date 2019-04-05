import React from 'react';

import { PieChart as Chart } from 'react-d3-components';

const PieChart = ({ chartValue, type }) => {

    let value;
    
    if(type === 'attributes') {
     value = chartValue.map((value) => (
            {
                x: value.attribute + `(${Math.round(value.percent)} %)`,
                y: value.count
            }
        ))
    } else {
        value = chartValue.map((value) => (
            {
                x: value.skill + `(${Math.round(value.percent)} %)`,
                y: value.count
            }
        ))
    }

   let pieValues = {
       label: 'pie chart',
       values: value
   }

    return (
        <Chart
                data={pieValues}
                width={1000}
                height={400}
                margin={{top: 10, bottom: 10, left: 100, right: 100}}
                sort={null}
            />
    )
}

export default PieChart;