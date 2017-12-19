import React, { Component } from 'react';

import { Input, Row } from 'react-materialize'

import CategoriesPickList from '../picklists/CategoriesPickList';

export default class PostFrom extends Component {

    state = {
        author: '',
        category: 'react',
        title: '',
        body: ''
    }

    onFormSubmit = (e) => {

        e.preventDefault();

        const { onSubmit } = this.props;

        onSubmit(this.state)
    }

    updateField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        const { post } = this.props;
        if (post) {
            this.setState({
                ...this.props.post
            })
        }
    }

    render() {

        const { author, category, title, body } = this.state;
        const { active } = this.props;

        return (
            <form onSubmit={this.onFormSubmit}>
                <Row className={active ? 'active' : null}>
                    <Input name="author" s={6} label="Author" value={author} onChange={this.updateField} className={'active'} />
                    <CategoriesPickList s={6} value={category} onChange={this.updateField} />
                    <Input name="title" s={12} label="Post Title" value={title} onChange={this.updateField} />
                    <div className="col input-field s12">
                        <textarea className="materialize-textarea" name="body" value={body} onChange={this.updateField}></textarea>
                        <label htmlFor="body">Post Body</label>
                    </div>
                    <hr />
                    <input type="submit" value="Save Post" className="btn waves-effect waves-light modal-close" />
                </Row>
            </form>
        )
    }
}

