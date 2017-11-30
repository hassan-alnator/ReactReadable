import { GET_ALL_POSTS, ADD_POST, VOTE_UP_POST, VOTE_DOWN_POST, DELETE_POST, EDIT_POST } from '../constants';

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return [...action.posts]
        case ADD_POST:
            return [...state].concat(action.post)
        case EDIT_POST:
            return [...state].map(i => i.id === action.post.id ? action.post : i)
        case DELETE_POST:
            return [...state].filter((i) => i.id !== action.post.id)
        case VOTE_UP_POST:
            return state.filter(post => post.id === action.postId ? post.voteScore = post.voteScore + 1 : post);
        case VOTE_DOWN_POST:
            return state.filter(post => post.id === action.postId ? post.voteScore = post.voteScore - 1 : post);
        default:
            return state;
    }
}

export default postsReducer;