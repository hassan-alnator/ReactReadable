import React, { Component } from 'react';
import Moment from 'react-moment';

// i created this module and published it to npm
import EditInPlace from "react-edit-in-place";



class Comment extends Component {

    updateComment = (id, comment) => {
        this.props.updateComment(id, comment)
    }

    voteUp = (id, parentId) => {
        this.props.voteUp(id, parentId);
    }

    voteDown = (id, parentId) => {
        this.props.voteDown(id, parentId);
    }

    deleteComment = (id, parentId) => {
        this.props.deleteComment(id, parentId);
    }


    render() {

        const { id, body, author, timestamp, voteScore, parentId } = this.props;

        return (
            <div className="col s12 comment card">
                <span onClick={() => this.deleteComment(id, parentId)}><b style={{ color: "red" }}>x</b></span>
                <hr />
                <EditInPlace
                    value={body}
                    name="comment"
                    type="text"
                    extraParams={{ id }}
                    onChange={(value, name, extraParams) => this.updateComment(extraParams.id, value)}
                />

                <hr />
                <div className="info">
                    <span className="info-text">{author} | <Moment toNow unix>{timestamp}</Moment> | <b>click on text to edit</b> </span>
                    <span className="info-votes">
                        {voteScore}
                        <i className="material-icons" onClick={() => this.voteUp(id, parentId)}>thumb_up</i>
                        <i className="material-icons" onClick={() => this.voteDown(id, parentId)}>thumb_down</i>
                    </span>
                </div>
            </div>
        )
    }
}

export default Comment;