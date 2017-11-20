import React from 'react';
import Moment from 'react-moment';
import { Card } from 'react-materialize';

import Comments from '../containers/CommentsContainer';
import Votes from '../containers/VotesContainer';
import PostUpdate from './PostUpdate';

const Post = ({ id, title, body, author, category, voteScore, timestamp, onPostUpdate }) => (
    <Card title={title}>
        <div className="card-content">
            <p>{body && body.substr(0, 250)}...</p>
            <span className="post-info">{category} | Posted By {author} <Moment toNow unix>{timestamp}</Moment></span>
            <PostUpdate onSubmit={onPostUpdate} post={{ id, title, body, author, category }} />
        </div>
        <div className="card-action post-actions">

            <Comments postId={id} />
            <Votes voteScore={voteScore} postId={id} />
        </div>
    </Card>
)

export default Post;