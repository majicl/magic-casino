import React, { Component } from 'react'
import styled from 'styled-components';

const A = styled.a`
  padding: 6px 16px;
  line-height: 40px;
  color: white;
  background-color: black;
`;

class ActionButton extends Component {
    render() {
        const { children, url, title } = this.props;
        return (
            <A 
              href={url}
              title={title}
            >
              {children}
            </A>
        )
    }
}

export default ActionButton;
