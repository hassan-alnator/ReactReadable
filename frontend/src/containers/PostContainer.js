import { connect } from 'react-redux'
import { getAllPosts, createPost } from '../actions';
import Post from '../components/Post';

const mapStateToProps = ({ posts, loading }, ownProps) => ({
    posts,
    loading,
    ...ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => ({

    updatePost: (post) => {
        dispatch(createPost(post))
    },
    deletePost: (post) => {

    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);