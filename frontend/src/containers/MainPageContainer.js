import { connect } from 'react-redux'
import { getAllPosts, createPost } from '../actions';
import Main from '../components/Main';

const mapStateToProps = ({ posts, loading }, ownProps) => ({
    posts,
    loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllPosts: () => {
        dispatch(getAllPosts())
    },
    createPost: (post) => {
        dispatch(createPost(post))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);