import React, { Component } from 'react'
import { ActionButton } from '../../../components'
require('../../../api/comeon/comeon.game-1.0.min')

/**
 * A container component to wrap game objects
 * @export
 * @class GameDetails
 * @extends {Component}
 */
export class GameDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameCode: props.match.params.id
    }
  }


  /**
   * 
   * using componentDidMount to start the navigated game
   * @memberOf GameDetails
   */
  componentDidMount() {
    window.comeon.game.launch(this.state.gameCode)
  }


  /**
   * 
   * 
   * back to game list
   * @memberOf GameDetails
   */
  onBackHander = (e) => {
    e.preventDefault()
    this.props.history.push("/games")
  }

  render() {
    return (
      <div className="ingame">
        <div className="ui grid centered">
          <div className="three wide column">

            <ActionButton
              url="/games"
              onClick={this.onBackHander}
            >
              <div className="ui right floated secondary button inverted">
                <i className="left chevron icon"></i> Back
            </div>
            </ActionButton>

          </div>
          <div className="ten wide column">
            <div id="game-launch">
            </div>
          </div>
          <div className="three wide column"></div>
        </div>
      </div>
    )
  }
}
