import { all } from 'redux-saga/effects';
import issueList from '../../views/IssueList/sagas';

export default function* rootSaga() {
  yield all([
    issueList(),
  ]);
}
