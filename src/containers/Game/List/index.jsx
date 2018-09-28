import React, { Component } from 'react'
import { GameItem } from '../../../components/GameItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as gameActions from '../../../actions/gameAction'

import './index.scss'

class GameList extends Component {

    state = {
        games: []
    }
    componentDidMount() {
        this.props.getAllGames();
    }

    render() {
        const { games, loading } = this.props;
        return (
            <ul className="game-item-container">
                {
                    games.map(game => 
                    <GameItem 
                        {...game}
                        key={game.code}
                    />)
                }

                {loading && <li><i>Loading...</i></li>}

                {(!loading && games.length === 0) && <li><i>No Game To Play</i></li>}
            </ul>
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
        ...bindActionCreators(gameActions, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(GameList);
