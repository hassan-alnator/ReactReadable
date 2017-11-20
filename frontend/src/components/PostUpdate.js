import React from 'react';
import { Modal, Button, Icon } from 'react-materialize'
import PostsForm from './forms/PostsFrom'

const PostUpdate = (props) => (
    <div>
        <Modal
            id={`update_post_${props.post.id}`}
            header='Update Post'
            trigger={<Button floating className='red' waves='light' icon='edit' />}>

            <PostsForm
                active={true}
                {...props}
            />

        </Modal>
    </div>
)

export default PostUpdate;