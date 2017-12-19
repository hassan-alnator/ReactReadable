import React, { Component } from 'react';

import Categorie from './Categorie';
import Post from '../containers/PostContainer'
import PostControlls from './PostControlls'
import Loading from './common/Loading'

export default class Main extends Component {

    state = {
        activeSort: false,
        sortType: "asc"
    }

    componentDidMount() {
        const { getAllPosts, getAllCategories } = this.props;
        getAllCategories();
        getAllPosts();
    }


    renderPosts = () => {

        const category = this.props.match.params.category;
        return this.props.posts
            .filter(post => category ? post.category === category && !post.deleted : !post.deleted)
            .sort((a, b) => {
                if (this.state.activeSort === "score") {
                    return this.state.sortType === "asc" ? a.voteScore - b.voteScore : b.voteScore - a.voteScore
                }
                return this.state.sortType === "asc" ? new Date(a.timestamp * 1000).getTime() - new Date(b.timestamp * 1000).getTime() : new Date(b.timestamp * 1000).getTime() - new Date(a.timestamp * 1000).getTime()
            })
            .reverse()
            .map(post => <Post Editable={false} key={post.id} {...post} categories={this.props.categories} />)
    }


    renderCategories = () => {
        return this.props.categories.map(
            categorie => <Categorie key={categorie.name} {...categorie} />
        )
    }

    sortByDate = () => {
        this.setState(
            (state) => ({
                activeSort: "date",
                sortType: state.sortType === "asc" ? "desc" : "asc"
            })
        )
    }

    sortByScore = () => {
        this.setState(
            (state) => ({
                activeSort: "score",
                sortType: state.sortType === "asc" ? "desc" : "asc"
            })
        )
    }

    render() {
        return (
            <div className="posts-container">
                Sort By : <span onClick={() => this.sortByDate()}>Date</span> | <span onClick={() => this.sortByScore()}> Score</span>
                <hr />
                <PostControlls
                    onPostCreate={this.props.createPost}
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


