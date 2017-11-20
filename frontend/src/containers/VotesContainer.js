import { connect } from 'react-redux'
import { voteDown, voteUp } from '../actions';
import Votes from '../components/Votes';

const mapStateToProps = ({ loading }, { postId, voteScore }) => ({
    loading,
    postId,
    voteScore
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    voteUp: (postId) => {
        dispatch(voteUp(postId))
    },
    voteDown: (postId) => {
        dispatch(voteDown(postId))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Votes);