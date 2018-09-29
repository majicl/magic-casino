import React, { Component } from 'react'
import { GameItem } from '../GameItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { gameAction } from '../../actions'

import './index.scss'

class GameList extends Component {

    state = {
        games: []
    }
    componentDidMount() {
        this.props.getGames();
    }

    render() {
        const { games, loading } = this.props;
        return (
            <section className="game-section">
                <header>
                    <h2>
                        Games {!loading && <span>({games.length})</span>} {loading && <span className="loader"><strong><i>Loading...</i></strong></span>}
                    </h2>
                    <hr />
                </header>
                <ul className="game-item-container">
                    {
                        games.map(game =>
                            <GameItem
                                {...game}
                                key={game.code}
                            />)
                    }

                    {(!loading && games.length === 0) && <li><i>There Is No Game To Play</i></li>}
                </ul>
            </section>
        )
    }
}

const mapStatetoProps = (state) => {
    const { games, loading } = state.game;
    return {
        games: [...games],
        loading: loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(gameAction, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(GameList);
