import React, { Component } from 'react';
import Post from '../containers/PostContainer'
import { Redirect } from 'react-router-dom';
export default class PostDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.location.state) {
            const { post } = this.props.location.state;
            return (
                <div>
                    <Post Editable={true} key={post.id} {...post} />
                </div>
            )
        } else {
            return <Redirect to="/404" />
        }
    }

}