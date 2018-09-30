import React, { Component } from 'react'

/**
 * Header of pages
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
    render() {
        return (
            <div className="ui one column center aligned page grid">
                <div className="column twelve wide">
                    <img src="/images/logo.svg" alt="logo" />
                </div>
            </div>
        )
    }
}

export default Header;
