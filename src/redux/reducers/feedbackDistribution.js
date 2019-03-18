import { GET_TABLE, GET_ATTRIBUTE, GET_PIE_CHART, GET_DISTRIBUTION } from '../actions/types';

const initialState = {
    table: [],
    attribute: [],
    pieChart: []
}

/**
 * feedback chart reducer.
 * @param {object} state 
 * @param {String} action 
 */
const feedbackDistribution = (state = initialState, action) => {
    switch (action.type) {
        case GET_TABLE: 
            return {
                ...state,
                table: action.payload,
                type: 'table'
            }
        case GET_ATTRIBUTE:
            return {
                ...state, 
                attribute: action.payload,
                type: 'attribute'
            }
        case GET_PIE_CHART:
            return {
                ...state,
                pieChart: action.payload,
                type: 'pieChart'
            }
        case GET_DISTRIBUTION:
            return {
                ...state,
                distribution: action.payload,
                type: 'distribution'
            }
        default: 
            return state;
    }
}

export default feedbackDistribution;