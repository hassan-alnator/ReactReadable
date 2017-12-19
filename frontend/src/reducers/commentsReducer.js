import {
    UPDATE_POST_COMMENTS_LIST,
    MAKE_COMMENT,
    UPDATE_COMMENT,
    VOTE_DOWN_COMMENT,
    VOTE_UP_COMMENT,
    DELETE_COMMENT
} from '../constants';

const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_POST_COMMENTS_LIST:
            return { ...state, [action.postId]: action.comments }
        case MAKE_COMMENT:
            return { ...state, [action.postId]: [...state[action.postId], action.comment] }
        case DELETE_COMMENT:
            return { ...state, [action.parentId]: [...state[action.parentId].filter(comment => comment.id !== action.id)] }
        case UPDATE_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: state[action.comment.parentId].map((comment) => {
                    if (comment.id === action.comment.id) return action.comment;
                    return comment;
                })
            }
        case VOTE_UP_COMMENT:

            return {
                ...state,
                [action.parentId]: state[action.parentId].map((comment) => {
                    if (comment.id === action.id) return { ...comment, voteScore: comment.voteScore + 1 }
                    return comment;
                })
            }

        case VOTE_DOWN_COMMENT:

            return {
                ...state,
                [action.parentId]: state[action.parentId].map((comment) => {
                    if (comment.id === action.id) return { ...comment, voteScore: comment.voteScore - 1 }
                    return comment;
                })
            }

        default:
            return state;
    }
}

export default commentsReducer;