import React from 'react'
import { ActionButton } from '../../components'

export const GameItem = ({ name, description, code, icon }) => {
  return (
    <div className="game item">
      <div className="ui small image">
        <img
          src={icon}
          alt={name}
        />
      </div>
      <div className="content">
        <div className="header">
          <b className="name">
            {name}
          </b>
        </div>
        <div className="description">
          {description}
        </div>
        <div className="extra">
          <ActionButton
            title={`let's play ${name}`}
            url={`/game/g-${code}/${name}`}
          >
            <div className="play ui right floated secondary button inverted">
              Play
              <i className="right chevron icon"></i>
            </div>
          </ActionButton>
        </div>
      </div>
    </div>
  )
}
