import { call,takeEvery } from 'redux-saga/effects';

const fetchIssueJson = () => {
    return fetch("https://api.github.com/repos/vmg/redcarpet/issues")
        .then( resp => {
            return resp.json().then( data => {
                return data;
            })
        })
        .catch((e)=>{
            console.log("ERROR LOADING FILE", e);
        })
};

function* getIssueList() {
    try {
        const issuesList = yield call(fetchIssueJson);
        console.log('issuesList', issuesList);
    } catch (e) {

    }
}

export function* sagas() {
  yield takeEvery('FETCH_ISSUE_LIST', getIssueList);
}

export default sagas;