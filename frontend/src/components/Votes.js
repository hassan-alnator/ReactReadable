import React, { Component } from 'react';
import { Button, Icon, Dropdown, NavItem } from 'react-materialize';

export default class Votes extends Component {

    voteUp = (e, postId) => {
        e.preventDefault()
        this.props.voteUp(postId)
    }

    voteDown = (e, postId) => {
        e.preventDefault()
        this.props.voteDown(postId)
    }

    render() {
        const { voteScore, postId } = this.props;

        return (
            <Dropdown trigger={
                <Button flat waves='light'>{voteScore} Likes<Icon left>thumb_up</Icon></Button>
            }>
                <NavItem onClick={(e) => this.voteUp(e, postId)}>Vote Up</NavItem>
                <NavItem divider />
                <NavItem onClick={(e) => this.voteDown(e, postId)}>Vote Down</NavItem>
                <NavItem divider />
            </Dropdown>
        )
    }

}

