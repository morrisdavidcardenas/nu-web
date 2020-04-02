import { get } from 'lodash';
export const issueListResults =  state => get(state,'getIssueList.issueListResults');
export const isIssueListLoading =  state => get(state,'getIssueList.isLoading');
