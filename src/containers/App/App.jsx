import { connect } from 'react-redux';
import App from '../../components/App';
import { fetchIssueList } from '../App/actions';


const mapStateToProps = (state) => {
    return {
        issueList: state.issueList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIssueList: dispatch(fetchIssueList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);