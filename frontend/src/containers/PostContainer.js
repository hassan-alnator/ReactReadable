import { connect } from 'react-redux'
import { editPost, deletePost } from '../actions';
import Post from '../components/Post';

const mapStateToProps = ({ posts, loading }, ownProps) => ({
    posts,
    loading,
    ...ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    updatePost: (post) => {
        dispatch(editPost(post))
    },
    deletePost: (post) => {
        dispatch(deletePost(post))
    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);