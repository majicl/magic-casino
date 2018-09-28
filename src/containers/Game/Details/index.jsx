import React, { Component } from 'react'
import './index.scss'
require('../../../api/comeon/comeon.game-1.0.min')

export class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCode: props.match.params.id,
      height: window.innerHeight
    }
  }

  componentDidMount() {
    window.comeon.game.launch(this.state.gameCode);
  }

  render() {
    return (
      <div id="game-launch" style={{height: this.state.height}}>
      </div>
    )
  }
}
