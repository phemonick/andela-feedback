import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';
class LineGraph extends Component {

        convert = () => {
            let value = this.props.graph.map((value, key) => (
                {
                    x: (value.date),
                    y: value.count
                }
            ))
            return {
                color: 'steelblue',
                points: value
            };
        }

        render() {
            return (
                <div>
                    <LineChart 
                        width={1000}
                        height={400}
                        isDate={true}
                        data={[this.convert()]}
                        xLabel="Dates"
                        yLabel="Number of feedback instances"
                    />
                </div>
            )
        }
    
}

export default LineGraph;
