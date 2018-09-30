import React, { Component } from 'react'
import {
    GameList,
    CategoryList,
    Header,
    UserCard,
    SearchBox
} from '../../components'

class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="main container">
                    <main className="casino">
                        <div className="ui grid centered">
                            <div className="twelve wide column">
                                <UserCard history={this.props.history} />
                            </div>
                            <div className="four wide column">
                                <SearchBox
                                    placeHolder="Game Search"
                                />
                            </div>
                        </div>
                        <div className="ui grid">
                            <div className="twelve wide column">
                                <GameList history={this.props.history} />
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
