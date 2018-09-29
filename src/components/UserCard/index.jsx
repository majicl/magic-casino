import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActionButton from '../ActionButton'
//mport { accountAction } from '../../actions'
import './index.scss'

class UserCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: 'Eric Beard',
                avatar: 'images/avatar/eric.jpg',
                event: 'I saw you won 500 SEK last time!',
                password: 'dad'
            }
        }
    }
    componentDidMount() {
        //this.props.getGames();

    }

    render() {
        const { user } = this.state;
        return (
            <section className="user-card">
                {!user && <ActionButton url="/login">Login</ActionButton>}
                <header>
                    <aside className="user-image">
                        <img src={user.avatar} alt={user.name} />
                    </aside>
                    <aside className="user-profile">
                        <div>
                            <strong>{user.name}</strong>
                        </div>
                        <div>
                            {user.event}
                        </div>
                    </aside>
                </header>
                <footer>
                    <ActionButton url="/logout"> &#x3C; Log Out </ActionButton>
                </footer>
            </section>
        )
    }
}

const mapStatetoProps = (state) => {
    //const { user } = state.account;
    return {
        //  user: {...user}
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //  ...bindActionCreators(gameActions, dispatch)
    }
}
//export default connect(mapStatetoProps, mapDispatchToProps)(UserCard);

export default UserCard
