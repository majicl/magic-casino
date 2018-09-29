import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { categoryAction, gameAction } from '../../actions'
import './index.scss'

class CategoryList extends Component {

    state = {
        categories: []
    }
    componentDidMount() {
        this.props.getGameCategories()
    }

    changeCategoryHandler = (e, categoryId) => {
        e.preventDefault();
        this.props.searchByCategories([categoryId])
    }

    isActive = (categoryId) => {
        return this.props.categoryIds.includes(categoryId) ? "active" : "";
    }

    render() {
        const { categories, catLoading } = this.props
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
                            <li className={this.isActive(cat.id)}
                                key={cat.id}
                            >
                                <a
                                    href="javscript:void(0)"
                                    onClick={(e) => this.changeCategoryHandler(e, cat.id)}
                                >
                                    <strong>{cat.name}</strong>
                                </a>
                            </li>
                        )
                    }

                    {catLoading && <li><i>Loading...</i></li>}
                </ul>
            </section>
        )
    }
}

const mapStatetoProps = (state) => {
    const { categories, catLoading } = state.category
    const { categoryIds } = state.game.searchOption
    return {
        categories: [...categories],
        categoryIds: [...categoryIds],
        catLoading: catLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(categoryAction, dispatch),
        ...bindActionCreators(gameAction, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(CategoryList)
