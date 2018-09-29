import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as categoryAction from '../../actions/categoryAction'
import './index.scss'

class CategoryList extends Component {

    state = {
        categories: []
    }
    componentDidMount() {
        this.props.getGameCategories()
    }

    render() {
        const { categories, loading } = this.props
        return (
            <section className="category-section">
                <header>
                    <h2>
                        Categories
                    </h2>
                    <hr />
                </header>
                <ul>
                    {
                        categories.map(cat =>
                            <li
                              key={cat.id}
                            >
                            <strong>{cat.name}</strong> 
                            </li>
                        )
                    }

                    {loading && <li><i>Loading...</i></li>}
                </ul>
            </section>
        )
    }
}

const mapStatetoProps = (state) => {
    const { categories, loading } = state.category;
    return {
        categories: [...categories],
        loading: loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(categoryAction, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(CategoryList);
