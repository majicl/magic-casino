import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as gameActions from '../../actions/gameAction'
import GameList from '../../components/GameList'
import CategoryList from '../../components/CategoryList'
import Header from '../../components/Header'
import UserCard from '../../components/UserCard'
import SearchBox from '../../components/SearchBox'

import './index.scss'

class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="main-section">
                    <div className="ui grid">
                        <div className="twelve wide column">
                            <UserCard />
                        </div>
                        <div className="four wide column">
                            <SearchBox
                                placeHolder="Game Search"
                            />
                        </div>
                        <div className="twelve wide column">
                            <GameList />
                        </div>
                        <div className="four wide column">
                            <CategoryList />
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

const mapStatetoProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(gameActions, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Landing);
