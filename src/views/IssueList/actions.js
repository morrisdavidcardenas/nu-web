import { GET_ISSUE_LIST_START, GET_ISSUE_LIST_ERROR, GET_ISSUE_LIST_COMPLETE, GET_ISSUE_LIST_RESET } from './constants';

export const getIssueList = (payload) => ({
  type: GET_ISSUE_LIST_START,
  payload
});

export const getIssueListError = (payload) => ({
  type: GET_ISSUE_LIST_ERROR,
  payload
});

export const getIssueListSuccess = (payload) => ({
  type: GET_ISSUE_LIST_COMPLETE,
  payload
});

export const getIssueListReset = (payload) => ({
  type: GET_ISSUE_LIST_RESET,
  payload
});

