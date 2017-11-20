import React, { Component } from 'react';

export default class CommentsForm extends Component {

    state = {
        comment: ""
    }

    onEnter = (e) => {

        // if clicked on Enter button
        if (e.which === 13) {

            // create Comment
            this.props.createComment(e.target.value)

            // empty the comment box
            this.setState({ comment: "" })
        }
    }

    render() {
        return (
            <div className="col input-field s12">
                <textarea value={this.state.comment} onChange={({ target }) => this.setState({ comment: target.value })} onKeyDown={(e) => this.onEnter(e)} className="materialize-textarea" name="comment"></textarea>
                <label>Write a Comment</label>
            </div >
        )
    }
}