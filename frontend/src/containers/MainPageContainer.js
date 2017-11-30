import { connect } from 'react-redux'
import { getAllPosts, createPost, getAllCategories } from '../actions';
import Main from '../components/Main';

const mapStateToProps = ({ posts, loading, categories }, ownProps) => ({
    posts,
    categories,
    loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllPosts: () => {
        dispatch(getAllPosts())
    },
    getAllCategories: () => {
        dispatch(getAllCategories())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);