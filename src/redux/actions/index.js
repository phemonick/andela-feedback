import { IS_LOADING } from './types';

export const loadingIndicator = (type, payload) => ({
  type,
  payload
});

export const isLoading = payload => dispatch => {
    dispatch(loadingIndicator(IS_LOADING, payload));
  };
