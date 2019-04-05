import { GET_TABLE, GET_ATTRIBUTE, GET_SKILL, GET_DISTRIBUTION } from '../actions/types';

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
        default: 
            return state;
    }
}

export default feedbackDistribution;