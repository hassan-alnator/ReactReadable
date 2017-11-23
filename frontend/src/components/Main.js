import React, { Component } from 'react';

import Post from '../containers/PostContainer'
import PostControlls from './PostControlls'
import Loading from './common/Loading'

export default class Main extends Component {



    componentDidMount() {
        this.props.getAllPosts();
    }

    /*onPostCreate = (post) => {
        this.props.createPost(post);
    }

    onPostUpdate = (post) => {

    }

    onPostDelete = (id) => {

    }*/

    renderPosts = () => {
        return this.props.posts
            .filter(post => !post.deleted)
            .map(post => <Post Editable={false} key={post.id} {...post} />)
    }



    render() {
        return (
            <div className="posts-container">
                <PostControlls
                    onPostCreate={this.onPostCreate}
                />
                <hr />
                {this.props.loading && <Loading />}
                {this.renderPosts()}
            </div>
        )
    }

}


