import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { categoryAction, gameAction } from '../../actions'

class CategoryList extends Component {

    state = {
        categories: []
    }
    componentDidMount() {
        this.props.getGameCategories()
    }

    shouldComponentUpdate(props) {
        if (this.props.categories !== props.categories ||
            this.props.catLoading !== props.catLoading) {
            return true
        }
        return false
    }

    changeCategoryHandler = (e, categoryId) => {
        e.preventDefault()
        this.props.searchByCategories([categoryId])
    }

    isActive = (categoryId) => {
        return this.props.categoryIds.includes(categoryId) ? "active" : ""
    }

    render() {
        const { categories, catLoading } = this.props
        return (
            <React.Fragment>
                <h3 className="ui dividing header">Categories</h3>
                <div className="ui selection animated list category items">
                    {
                        categories.map(cat =>
                            <div className={"category item " + this.isActive(cat.id)} key={cat.id}>
                                <div className="content"
                                    onClick={(e) => this.changeCategoryHandler(e, cat.id)}
                                >
                                    <div className="header">{cat.name}</div>
                                </div>
                            </div>
                        )
                    }

                    {catLoading && <div><i>Loading...</i></div>}

                </div>
            </React.Fragment>
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
