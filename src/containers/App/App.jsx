import { connect } from 'react-redux';
import  React from 'react';
import App from '../../components/App';
import { fetchIssueList } from '../App/actions';

class IssueList extends React.PureComponent {
    componentDidMount(){
        console.log(this.props);
        this.props.fetchIssues();
    }
    render() {
        return(
        <App />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        issueList: state.issueList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIssues: () => { dispatch(fetchIssueList())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);