import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_ISSUE_LIST_START } from './constants';
import { getIssueListError, getIssueListSuccess } from './actions';
import { apiCall } from '../../axiosFiles';

const nuApi = process.env.REACT_APP_REVA_API || 'http://localhost:3001';

export function* getIssueList({ payload }) {
  try {
    const results = yield call(apiCall, `${nuApi}/gitHub/repos/facebook/react/issues`, payload, null, 'GET');
    yield put(getIssueListSuccess(results));
  } catch (error) {
    yield put(getIssueListError(error));
  }
}

export default function* issueList() {
  yield takeLatest(GET_ISSUE_LIST_START, getIssueList);
}
