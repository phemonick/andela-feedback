import { combineReducers } from 'redux';
import networkRequest from './networkRequest';
import table from './table';
import pieChart from './piechart'

const root = combineReducers({
    networkRequest,
    table,
    pieChart
  });
  
  export default root;