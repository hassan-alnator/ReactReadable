import React, { Component } from 'react';

import Categorie from './Categorie';
import Post from '../containers/PostContainer'
import PostControlls from './PostControlls'
import Loading from './common/Loading'

export default class Main extends Component {



    componentDidMount() {
        const { getAllPosts, getAllCategories } = this.props;
        getAllCategories();
        getAllPosts();
    }


    renderPosts = () => {
        const category = this.props.match.params.category;
        return this.props.posts
            .filter(post => category ? post.category === category && !post.deleted : !post.deleted)
            .map(post => <Post Editable={false} key={post.id} {...post} categories={this.props.categories} />)
    }


    renderCategories = () => {
        return this.props.categories.map(
            categorie => <Categorie {...categorie} />
        )
    }



    render() {
        return (
            <div className="posts-container">
                <PostControlls
                    onPostCreate={this.onPostCreate}
                />
                <hr />
                {this.props.loading && <Loading />}
                {this.renderCategories()}
                <hr />
                {this.renderPosts()}
            </div>
        )
    }

}


