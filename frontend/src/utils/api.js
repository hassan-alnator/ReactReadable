import timestamp from 'unix-timestamp'
import uuidv4 from 'uuid/v4';

// authorization key and header
const authorization = "hassanalnator123";
const apiEndPoit = "http://localhost:3001";
const headers = { 'Authorization': authorization, "Content-Type": "application/json" };

/* Categories */
export const getAllCategories = () => fetch(
    `${apiEndPoit}/categories`,
    { method: 'GET', headers }
).then((res) => res.json());

export const getPostsForCategory = (category) => fetch(
    `${apiEndPoit}/${category}/posts`,
    { method: 'GET', headers }
).then((res) => res.json());


/* Posts */
export const getAllPosts = () => fetch(
    `${apiEndPoit}/posts`,
    { method: 'GET', headers }
).then((res) => res.json());

export const getPostDetails = (id) => fetch(
    `${apiEndPoit}/posts/${id}`,
    { method: 'GET', headers }
).then((res) => res.json());

export const voteOnPost = (id, option) => fetch(
    `${apiEndPoit}/posts/${id}`,
    { method: 'POST', headers, body: JSON.stringify({ option }) }
).then((res) => res.json());

export const deletePost = (id) => fetch(
    `${apiEndPoit}/posts/${id}`,
    { method: 'DELETE', headers }
).then((res) => res.json());

export const editPost = ({ id, title, body }) => {

    const requestBody = { title, body };

    return fetch(`${apiEndPoit}/posts/${id}`, { method: 'PUT', headers, body: JSON.stringify(requestBody) })
        .then((res) => res.json());
}

export const addPost = ({ title, body, author, category }) => {

    const id = uuidv4();
    const now = timestamp.now();
    const requestBody = { id, timestamp: now, title, body, author, category };

    return fetch(`${apiEndPoit}/posts`, { method: 'POST', headers, body: JSON.stringify(requestBody) })
        .then((res) => res.json())
        .then((res) => Object.assign({}, requestBody, res))

}


/* Comments */

export const getPostComments = (id) => fetch(
    `${apiEndPoit}/posts/${id}/comments`,
    { method: 'GET', headers }
).then((res) => res.json());

export const addComment = (body, author, parentId) => {

    const id = uuidv4();
    const now = timestamp.now();
    const requestBody = JSON.stringify({ id, timestamp: now, body, author: author, parentId })

    return fetch(`${apiEndPoit}/comments`, { method: 'POST', headers, body: requestBody })
        .then((res) => res.json());
}

export const editComment = (id, body) => {

    const now = timestamp.now();
    const requestBody = { timestamp: now, body };
    console.log(requestBody)
    return fetch(`${apiEndPoit}/comments/${id}`, { method: 'PUT', headers, body: JSON.stringify(requestBody) })
        .then((res) => res.json());
}

export const getCommentDetails = (id) => fetch(
    `${apiEndPoit}/comments/${id}`,
    { method: 'GET', headers }
).then((res) => res.json());

export const voteOnComment = (id, option) => fetch(
    `${apiEndPoit}/comments/${id}`,
    { method: 'POST', headers, body: JSON.stringify({ option }) }
).then((res) => res.json());

export const deleteComment = (id) => fetch(
    `${apiEndPoit}/comments/${id}`,
    { method: 'DELETE', headers }
).then((res) => res.json());