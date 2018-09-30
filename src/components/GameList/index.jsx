import React, { Component } from 'react'
import { GameItem } from '../GameItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { gameAction } from '../../actions'

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
            <React.Fragment>
                <h3 className="ui dividing header">
                    Games {!loading && <span>({games.length})</span>} {loading && <span className="loader"><strong><i>Loading...</i></strong></span>}
                </h3>
                <div className="ui relaxed divided game items links">
                    {
                        games.map(game =>
                            <GameItem
                                history={this.props.history}
                                {...game}
                                key={game.code}
                            />)
                    }

                    {(!loading && games.length === 0) && <div><i>There Is No Game To Play</i></div>}
                </div>
            </React.Fragment>
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
