import { isLoading } from './index';
import { GET_TABLE, GET_PIE_CHART, GET_ATTRIBUTE, GET_DISTRIBUTION } from './types';
import instance from '../../http/instance';

const feedbackValue = (type, payload) => ({
    type,
    payload
  });

export const getFeedbackValue = (type, token) => async (dispatch) => {
    dispatch(isLoading(true));
    try{
        const response = await instance.get(`${token}`);
        const { data } = response;
        console.log(data.records);
        dispatch(isLoading(false));
        switch(type) {
            case 'table':
                return dispatch(feedbackValue(GET_TABLE, data.records));
            case 'distribution':
                return dispatch(feedbackValue(GET_DISTRIBUTION, data.records))
            case 'skills':
                return dispatch(feedbackValue(GET_PIE_CHART, data.records));
            case 'attributes':
                return dispatch(feedbackValue(GET_ATTRIBUTE, data.records));
            default:
                return null;      
        }

    } catch(error) {
        dispatch(isLoading(false));
    }

}
