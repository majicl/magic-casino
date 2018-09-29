import React, { Component } from 'react'

class ActionButton extends Component {
    render() {
        const { children, url, title } = this.props;
        return (
            <a 
              href={url}
              title={title}
            >
              {children}
            </a>
        )
    }
}

export default ActionButton;
