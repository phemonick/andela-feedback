import React, { Component, Fragment } from 'react';
import { BarChart } from 'react-d3-components';
import { connect } from 'react-redux';
import '../../App.css';
import Loader from '../../component/loader'
import Table from '../../component/Table'
import PieChart from '../../component/PieChart';
import { getFeedbackValue } from '../../redux/actions/feedback';
import ErrorPage from '../../component/ErrorPage';



const data = [{
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
}];

/**
 * Index page
 */
class Home extends Component {

    componentDidMount() {
        const { params } = this.props.match;
        this.props.getFeedbackValue(params.type, params.token);
    }

    /**
     * display feedback in rows.
     * @returns JSX
     */
    allFeedback = () => 
        this.props.userTable.map((feedbackItem, index) => (
            <Table
                key={feedbackItem.id}
                id= {index}
                fellow= {feedbackItem.recipientName !== null ? feedbackItem.recipientName : undefined}
                from={feedbackItem.senderName}
                message={feedbackItem.message}
                skill = {feedbackItem.skill !== null ? feedbackItem.skill.name : 'kay'}
                type = {feedbackItem.type}
                date = {feedbackItem.createdAt}
             />
        ))

    /**
     * display feedback table header.
     * @returns JSX
     */
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

    /**
     * display piechart representation.
     * @returns JSX
     */
    renderPieChart = () => (
        <div className="App">
            <div className="feedback-table align-to-center">
                <div className="feedback-header"> Skills </div>
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

    determineChart = () => {
        switch(this.props.type) {
            case 'table':
                return this.renderTable();
            case 'pieChart':
                return this.renderPieChart();
            default:
                return <ErrorPage />;
        }
    }

    render() {
       return this.props.isloading ? <Loader /> : this.determineChart()
    }
  }

  export const mapStateToProps = ({ feedbackDistribution, networkRequest }) => ({
      userTable: feedbackDistribution.table,
      pieChart: feedbackDistribution.pieChart,
      type: feedbackDistribution.type,
      isloading: networkRequest.isLoading
  })
  
  export default connect(mapStateToProps, {getFeedbackValue})(Home);
