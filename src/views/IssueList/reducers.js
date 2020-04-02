import { GET_ISSUE_LIST_START, GET_ISSUE_LIST_ERROR, GET_ISSUE_LIST_COMPLETE, GET_ISSUE_LIST_RESET } from './constants';

const initialState = {};

export function getIssueList(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUE_LIST_START:
      return { ...state, isLoading: true };
    case GET_ISSUE_LIST_ERROR:
      return { ...state, isLoading: false, issueListResults: action.payload.response.data };
    case GET_ISSUE_LIST_COMPLETE:
      return { ...state, isLoading: false, issueListResults: action.payload.data };
    case GET_ISSUE_LIST_RESET:
      return { ...state, isLoading: false, issueListResults: null };      
    default:
      return { ...state };
  }
}
