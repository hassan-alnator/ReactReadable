import { connect } from 'react-redux'
import { getPostComments, createComment, updateComment, voteDownComment, voteUpComment } from '../actions';
import Comments from '../components/Comments';

const mapStateToProps = ({ loading, comments }, { postId }) => ({
    comments: comments[postId],
    postId,
    loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getPostComments: (postId) => {
        dispatch(getPostComments(postId))
    },
    createComment: (comment, postId) => {
        dispatch(createComment(comment, postId))
    },
    updateComment: (commentId, updatedComment) => {
        dispatch(updateComment(commentId, updatedComment))
    },
    voteUp: (id, parentId) => {
        dispatch(voteUpComment(id, parentId))
    },
    voteDown: (id, parentId) => {
        dispatch(voteDownComment(id, parentId))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);