import React from 'react';
import Moment from 'react-moment';
import { Card, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

import Comments from '../containers/CommentsContainer';
import Votes from '../containers/VotesContainer';
import PostUpdate from './PostUpdate';

const Post = ({ id, title, body, author, category, voteScore, timestamp, onPostUpdate, Editable, updatePost, deletePost, categories }) => {

    if (Editable) {
        return (
            <Card title={title}>
                <div className="card-content">
                    <p>{body}</p>
                    <span className="post-info">{category} | Posted By {author} <Moment toNow unix>{timestamp}</Moment></span>
                    <PostUpdate onSubmit={(post) => updatePost(post)} post={{ id, title, body, author, category }} />
                    <br />
                    <Button floating className='red' waves='light' icon='delete' onClick={(e) => deletePost({ id, title, body, author, category })} />

                </div>
                <div className="card-action post-actions">
                    <Comments postId={id} />
                    <Votes voteScore={voteScore} postId={id} />
                </div>
            </Card>
        )
    }

    return (
        <Card title={title}>
            <div className="card-content">
                <p>{body && body.substr(0, 250)}...</p>
                <span className="post-info">{category} | Posted By {author} <Moment toNow unix>{timestamp}</Moment></span>
                <PostUpdate onSubmit={(post) => updatePost(post)} post={{ id, title, body, author, category }} />
                <br />
                <Button floating className='red' waves='light' icon='delete' onClick={(e) => deletePost({ id, title, body, author, category })} />
                <br /><br />
                <Link to={{
                    pathname: `/${category}/${id}`,
                    state: { post: { id, title, body, author, category, voteScore, timestamp }, categories }
                }}>More Details</Link>
            </div>

            <div className="card-action post-actions">
                <Comments postId={id} />
                <Votes voteScore={voteScore} postId={id} />
            </div>
        </Card>
    )
}
export default Post;