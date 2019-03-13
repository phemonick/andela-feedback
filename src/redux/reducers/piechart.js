import { GET_PIE_CHART } from '../actions/types';

const initialState= {
    "records": [
        {"attribute":"Quantity","count":1,"percent":16.666666666666664},
        {"attribute":"Quality","count":4,"percent":66.66666666666666},{"attribute":"Communication","count":1,"percent":16.666666666666664}]
    }

const piechart = (state = initialState, action) => {
    switch (action.type) {
        case GET_PIE_CHART: 
            return state
        default: 
            return state;
    }
}

export default piechart