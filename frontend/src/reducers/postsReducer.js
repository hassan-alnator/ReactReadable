import { GET_ALL_POSTS, ADD_POST, VOTE_UP_POST, VOTE_DOWN_POST } from '../constants';

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return [...action.posts]
        case ADD_POST:
            return [...state].concat(action.post)
        case VOTE_UP_POST:
            return state.filter(post => post.id === action.postId ? post.voteScore = post.voteScore + 1 : post);
        case VOTE_DOWN_POST:
            return state.filter(post => post.id === action.postId ? post.voteScore = post.voteScore - 1 : post);
        default:
            return state;
    }
}

export default postsReducer;