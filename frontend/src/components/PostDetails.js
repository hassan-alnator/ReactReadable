import React, { Component } from 'react';
import Post from '../containers/PostContainer'

export default class PostDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { post } = this.props.location.state;
        console.log(post)
        return (
            <div>
                <Post Editable={true} key={post.id} {...post} />
            </div>
        )
    }

}