import React, { Component } from 'react'

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
