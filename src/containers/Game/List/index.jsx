import React, { Component } from 'react'
import { GameItem } from '../../../components/GameItem';

export class GameList extends Component {
    render() {
        return (
            <ul>
                <GameItem />
                <GameItem />
            </ul>
        )
    }
}
