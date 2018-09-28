import React, { Component } from 'react'
import styled from 'styled-components';

const A = styled.a`
  padding: 6px 8px;
  line-height: 40px;
  color: white;
  background-color: black;
`;

class PlayButton extends Component {
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

export default PlayButton;
