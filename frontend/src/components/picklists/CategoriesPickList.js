import React, { Component } from 'react';
import { Input } from 'react-materialize'
import { getAllCategories } from '../../utils/api'

export default class CategoriesPickList extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        getAllCategories()
            .then(({ categories }) => this.setState({ categories }))
            .catch(e => console.log(e))
    }

    render() {
        const { s, value } = this.props;
        const { categories } = this.state;

        if (categories.length === 0) return <div>loading</div>



        return (
            <Input s={s} type='select' label="category" name="category" value={value} onChange={this.props.onChange}>
                {
                    categories.map(({ name }) => <option key={name} value={name}>{name}</option>)
                }
            </Input>
        )
    }

}