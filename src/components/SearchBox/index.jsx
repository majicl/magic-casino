import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as gameActions from '../../actions/gameAction'

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
                self.props.searchGames(value)
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
            <React.Fragment>
                <div className={"ui search " + this.isLoading(searching)}>
                    <div className="ui icon input">
                        <input
                            className="prompt"
                            type="text"
                            placeholder={placeHolder}
                            onKeyUp={this.searchGameHandler}
                        />
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </React.Fragment>
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
        ...bindActionCreators(gameActions, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(SearchBox);
