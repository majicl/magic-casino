import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { gameAction } from '../../actions'

class SearchBox extends Component {

    isLoading = (searching) => {
        return searching ? 'loading' : ''
    }
    searchTimeoutId = -1
    keyword = ''
    searchGameHandler = (e) => {
        const self = this
        const value = e.target.value
        clearTimeout(self.searchTimeoutId)
        self.searchTimeoutId = setTimeout(() => {
            if (self.keyword !== value) {
                self.props.searchByKeyword(value)
                self.keyword = value
            }
        }, 100)
    }

    render() {
        const {
            placeHolder
        } = this.props;

        const { searching } = this.props;
        return (
            <div className={"search ui small icon input " + this.isLoading(searching)}>
                <input
                    type="text"
                    placeholder={placeHolder}
                    onKeyUp={this.searchGameHandler}
                />
                <i className="search icon"></i>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    const { searching } = state.game;
    return {
        searching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(gameAction, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(SearchBox);
