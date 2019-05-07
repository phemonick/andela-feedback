import { GET_TABLE, GET_ATTRIBUTE, GET_SKILL, GET_DISTRIBUTION, GET_LINE_GRAPH } from '../actions/types';

const initialState = {
    table: [],
    attribute: [],
    pieChart: [],
    lineGraph: []
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
                pieChart: action.payload,
                type: 'attributes'
            }
        case GET_SKILL:
            return {
                ...state,
                pieChart: action.payload,
                type: 'skills'
            }
        case GET_DISTRIBUTION:
            return {
                ...state,
                distribution: action.payload,
                type: 'distribution'
            }
        case GET_LINE_GRAPH:
            return {
                ...state,
                lineGraph: action.payload,
                type: 'line'
            }
        default: 
            return state;
    }
}

export default feedbackDistribution;