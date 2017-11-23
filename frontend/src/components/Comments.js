import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'react-materialize'

import Comment from './Comment'
import CommentsForm from './forms/CommentsFrom'
import Loading from './common/Loading'

export default class Comments extends Component {



    componentWillMount() {
        const { postId, getPostComments } = this.props;
        getPostComments(postId);
    }

    createComment = (comment, author) => {

        const { postId, createComment } = this.props;
        createComment(comment, author, postId)

    }
    render() {
        const { comments, loading } = this.props;

        return (
            <div>
                <Modal
                    header='Comments'
                    trigger={<Button flat waves='light'>{comments && comments.length} Comments<Icon left>comment</Icon></Button>}>
                    <div>
                        {loading && <Loading />}
                        {comments && comments.map(comment => <Comment key={comment.id} {...comment} {...this.props} />)}
                    </div>
                    <br />
                    <CommentsForm createComment={this.createComment} />
                </Modal>

            </div>
        )
    }
}

Comments.propTypes = {
    postId: PropTypes.string.isRequired
}