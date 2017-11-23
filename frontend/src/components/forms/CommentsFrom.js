import React, { Component } from 'react';

export default class CommentsForm extends Component {

    state = {
        comment: "",
        author: ""
    }

    onEnter = (e) => {
        const { comment, author } = this.state;
        // if clicked on Enter button
        if (e.which === 13) {

            // create Comment
            this.props.createComment(comment, author)

            // empty the comment box
            this.setState({ comment: "", author: "" })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col input-field s12">
                    <input type="text" value={this.state.author} onChange={({ target }) => this.setState({ author: target.value })} />
                    <label>Name</label>
                </div>
                <div className="col input-field s12">
                    <textarea value={this.state.comment} onChange={({ target }) => this.setState({ comment: target.value })} onKeyDown={(e) => this.onEnter(e)} className="materialize-textarea" name="comment"></textarea>
                    <label>Write a Comment</label>
                </div >
            </div>
        )
    }
}