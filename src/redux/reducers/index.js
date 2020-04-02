import { combineReducers } from 'redux';
import { getIssueList } from '../../views/IssueList/reducers';

const rootReducer = combineReducers({
  getIssueList
});

export default rootReducer;
