import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Categorie extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={`/${this.props.path}`}>{this.props.name}</Link>
            </div>
        )
    }

}