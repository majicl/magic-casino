import React, { Component } from 'react'

/**
 * A configurable and resuble button for the project
 * @class ActionButton
 * @extends {Component}
 */
class ActionButton extends Component {
    render() {
        const { children, url, title, onClick } = this.props
        return (
            <a 
              href={url}
              title={title}
              onClick={onClick}
            >
              {children}
            </a>
        )
    }
}

export default ActionButton
