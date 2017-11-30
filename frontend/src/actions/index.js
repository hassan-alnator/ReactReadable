import {
    GET_ALL_POSTS,
    START_LOADING,
    STOP_LOADING,
    GET_ALL_CATEGORIES,
    ADD_POST,
    UPDATE_POST_COMMENTS_LIST,
    VOTE_DOWN_POST,
    VOTE_UP_POST,
    VOTE_DOWN_COMMENT,
    VOTE_UP_COMMENT,
    MAKE_COMMENT,
    UPDATE_COMMENT,
    EDIT_POST,
    DELETE_POST
} from '../constants'

import * as Api from '../utils/api'


// Actions creaters
const startLoading = () => ({ type: START_LOADING });

const stopLoading = () => ({ type: STOP_LOADING });

const updatePostsList = (posts) => ({
    type: GET_ALL_POSTS,
    posts
});

const updateCategoriesList = (categories) => ({
    type: GET_ALL_CATEGORIES,
    categories
})

const updatePostCommentsList = (comments, postId) => ({
    type: UPDATE_POST_COMMENTS_LIST,
    comments,
    postId
})

const VoteUp = (postId) => ({
    type: VOTE_UP_POST,
    postId
})

const VoteDown = (postId) => ({
    type: VOTE_DOWN_POST,
    postId
})

const VoteUpComment = (id, parentId) => ({
    type: VOTE_UP_COMMENT,
    id,
    parentId
})

const VoteDownComment = (id, parentId) => ({
    type: VOTE_DOWN_COMMENT,
    id,
    parentId
})

const CreateComment = (comment, postId) => ({
    type: MAKE_COMMENT,
    comment,
    postId
})

const UpdateCommentsList = comment => ({
    type: UPDATE_COMMENT,
    comment
})

// API Action

export const createComment = (comment, author, postId) => (dispatch) => {
    dispatch(startLoading());
    Api.addComment(comment, author, postId).then((comment) => {
        dispatch(CreateComment(comment, postId));
        dispatch(stopLoading());
    })
}

export const voteUp = (postId) => (dispatch) => {
    dispatch(startLoading());
    Api.voteOnPost(postId, "upVote").then(() => {
        dispatch(VoteUp(postId))
        dispatch(stopLoading());
    })
}

export const voteDownComment = (commentId, parentId) => (dispatch) => {
    dispatch(startLoading());
    Api.voteOnComment(commentId, "downVote").then(() => {
        dispatch(VoteDownComment(commentId, parentId))
        dispatch(stopLoading());
    })
}

export const voteUpComment = (commentId, parentId) => (dispatch) => {
    dispatch(startLoading());
    Api.voteOnComment(commentId, "upVote").then(() => {
        dispatch(VoteUpComment(commentId, parentId))
        dispatch(stopLoading());
    })
}

export const voteDown = (postId, parentId) => (dispatch) => {
    dispatch(startLoading());
    Api.voteOnPost(postId, "downVote").then(() => {
        dispatch(VoteDown(postId, parentId))
        dispatch(stopLoading());
    })
}

export const getAllPosts = () => (dispatch) => {
    dispatch(startLoading());
    Api.getAllPosts().then(posts => {
        dispatch(updatePostsList(posts));
        dispatch(stopLoading());
    })
}



export const createPost = (post) => (dispatch) => {
    dispatch(startLoading());
    Api.addPost(post).then(post => dispatch({
        type: ADD_POST,
        post
    }))
    dispatch(stopLoading());

}


export const editPost = (post) => (dispatch) => {
    dispatch(startLoading());
    Api.editPost(post).then(post => {
        dispatch({
            type: EDIT_POST,
            post
        })
        window.location.href = "/"
    })

}
export const deletePost = (post) => (dispatch) => {
    dispatch(startLoading());
    Api.deletePost(post).then(post => {
        dispatch({
            type: DELETE_POST,
            post
        })
        window.location.href = "/"
    })

}


export const getAllCategories = () => dispatch => {
    dispatch(startLoading());
    Api.getAllCategories().then(categories => {
        dispatch(stopLoading());
        dispatch(updateCategoriesList(categories));
    })
}

export const getPostComments = (postId) => dispatch => {
    dispatch(startLoading());
    Api.getPostComments(postId).then(comments => {
        dispatch(stopLoading());
        dispatch(updatePostCommentsList(comments, postId))
    })
}

export const updateComment = (id, comment) => dispatch => {
    Api.editComment(id, comment)
        .then(comment => dispatch(UpdateCommentsList(comment)))
}
