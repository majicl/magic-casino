import React, { Component } from 'react'
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
                <div className="main container">
                    <main className="casino">
                        <div className="ui grid centered">
                            <div className="twelve wide column">
                                <UserCard />
                            </div>
                            <div className="four wide column">
                                <SearchBox
                                    placeHolder="Game Search"
                                />
                            </div>
                        </div>
                        <div className="ui grid">
                            <div className="twelve wide column">
                                <GameList />
                            </div>
                            <div className="four wide column">
                                <CategoryList />
                            </div>
                        </div>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

export default Landing
