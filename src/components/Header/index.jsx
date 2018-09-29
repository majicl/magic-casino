import React, { Component } from 'react'
import styled from 'styled-components';

const SHeader = styled.header`
  background-image: url(/images/logo.svg);
  height: 200px;
  background-repeat: no-repeat;
  background-position: center center;
`;

class Header extends Component {
    render() {
        return (
            <SHeader>   
            </SHeader>
        )
    }
}

export default Header;
