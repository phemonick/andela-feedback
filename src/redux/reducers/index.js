import { combineReducers } from 'redux';
import networkRequest from './networkRequest';
import feedbackDistribution from './feedbackDistribution';

const root = combineReducers({
    networkRequest,
    feedbackDistribution,
  });
  
  export default root;