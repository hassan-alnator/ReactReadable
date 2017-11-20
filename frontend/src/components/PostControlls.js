import React from 'react';
import { Modal, Button, Icon } from 'react-materialize'
import PostsForm from './forms/PostsFrom'

const PostControllers = ({ onPostCreate }) => (
    <div>
        <Modal
            id="create_post"
            header='Create New Post'
            trigger={<Button waves='light'>Create a new post<Icon left>add</Icon></Button>}>

            <PostsForm
                onSubmit={onPostCreate}
            />

        </Modal>
    </div>
)

export default PostControllers;