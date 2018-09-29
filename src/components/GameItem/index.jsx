import React from 'react'
import ActionButton from '../ActionButton'

export const GameItem = ({ name, description, code, icon }) => {
  return (
    <li>
      <div className="imageBox">
        <img
          src={icon}
          alt={name}
        />
      </div>
      <div className="descriptionBox">
        <ul>
          <li>
              <h2>
                {name}
              </h2>
            </li>
          <li>
            <p>
              {description}
            </p>
            </li>
          <li 
            className="action"
          >
            <ActionButton
              title={`let's play ${name}`}
              url={`/game/g-${code}/${name}`}
            >
              Play >
            </ActionButton>
          </li>
        </ul>
      </div>
    </li>
  )
}
