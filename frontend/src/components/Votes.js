import React, { Component } from 'react';
import { Button, Icon, Dropdown, NavItem } from 'react-materialize';

export default class Votes extends Component {

    state = {
        votes: 0,
        postId: 0
    }

    componentDidMount() {

        const { voteScore, postId } = this.props;

        this.setState({
            voteScore,
            postId
        })
    }

    voteUp = (e, postId) => {
        e.preventDefault()
        this.props.voteUp(postId)
        this.setState((state) => ({ voteScore: state.voteScore + 1 }))
    }

    voteDown = (e, postId) => {
        e.preventDefault()
        this.setState((state) => ({ voteScore: state.voteScore - 1 }))
        this.props.voteDown(postId)
    }

    render() {
        const { voteScore, postId } = this.state;

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

