import React, { Component, Fragment } from 'react';
import { BarChart } from 'react-d3-components';
import { connect } from 'react-redux';
import '../../App.css';
import Table from '../Table';
import PieChart from '../PieChart'



var data = [{
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
}];


class Home extends Component {

    componentDidMount() {
        console.log(this.props.match.params.chart);
    }

    allFeedback = () => 
        this.props.barChart.map((feedbackItem, index) => (
            <Table
                key={feedbackItem.id}
                id= {index}
                fellow= {feedbackItem.recipientName}
                from={feedbackItem.senderName}
                message={feedbackItem.message}
                skill = {feedbackItem.skill.name}
                type = {feedbackItem.type}
                date = {feedbackItem.createdAt}
             />
        ))

    renderTable = () => {
        return (
            <div className="App">
                <div className="feedback-table">
                    <div className="feedback-header"> Table </div>
                    <div className="feedback-row">
                        <div className="fb-ind-item">S/N</div>
                        <div className="fb-ind-item">Fellow</div>
                        <div className="fb-ind-item">From</div>
                        <div className="fb-ind-item">Feedback</div>
                        <div className="fb-ind-item">Skill</div>
                        <div className="fb-ind-item">Type</div>
                        <div className="fb-ind-item"> Date</div>
                    </div>
                        {
                        this.allFeedback()
                            
                        }
                </div>
            </div>
        )
    }

    renderPieChart = () => (
        <div className="App">
            <div className="feedback-table">
                <div className="feedback-header"> Pie chart </div>
                <PieChart
                    chartValue = {this.props.pieChart}
                />

            </div>
        </div>
    )

    rendarBarchart = () => (
        <BarChart
            data={data}
            width={400}
            height={400}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}/>

    )

    setData = () => {
        this.props.barChart.map((bar) => {
            return {
                x: bar.name,

                

            }
        })
    }

    render() {
        switch(this.props.match.params.chart) {
            case 'table':
                return this.renderTable();
            case 'piechart':
                return this.renderPieChart();
            default:
                return null;
        }

    }
  }

  export const mapStateToProps = ({ table, pieChart }) => ({
      barChart: table.rows,
      pieChart: pieChart.records
  })
  
  export default connect(mapStateToProps, null)(Home)