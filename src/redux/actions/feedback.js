import { isLoading } from './index';
import { GET_TABLE, GET_SKILL, GET_ATTRIBUTE, GET_DISTRIBUTION, GET_LINE_GRAPH } from './types';
import instance from '../../http/instance';

const feedbackValue = (type, payload) => ({
    type,
    payload
  });

/**
 * get feedback value.
 * @param {String} type feedback type
 * @param {String} token 
 */
export const getFeedbackValue = (type, token) => async (dispatch) => {
    dispatch(isLoading(true));
    try{
        const response = await instance.get(`${token}`);
        const { data } = response;
        dispatch(isLoading(false));
        switch(type) {
            case 'table':
                return dispatch(feedbackValue(GET_TABLE, data.records));
            case 'distributions':
                return dispatch(feedbackValue(GET_DISTRIBUTION, data.records))
            case 'skills':
                return dispatch(feedbackValue(GET_SKILL, data.records));
            case 'attributes':
                return dispatch(feedbackValue(GET_ATTRIBUTE, data.records));
            case 'distribution':
            return dispatch(feedbackValue(GET_LINE_GRAPH, data.records));
            default:
                return null;      
        }

    } catch(error) {
        dispatch(isLoading(false));
    }

}
