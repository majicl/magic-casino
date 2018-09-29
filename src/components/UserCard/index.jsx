import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionButton } from '../../components'
import { accountAction } from '../../actions'
import './index.scss'

class UserCard extends Component {

    state = {
        user: null
    }

    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                {!user && <ActionButton url="/login">
                    <div className="logout ui left floated secondary button inverted">
                        Log In <i className="right chevron icon"></i>
                    </div>
                </ActionButton>}
                {
                    user &&
                    <React.Fragment>
                        <header className="ui list">
                            <div className="player item">
                                <img className="ui avatar image" src={user.avatar} alt="avatar" />
                                <div className="content">
                                    <div className="header"><b className="name">{user.name}</b></div>
                                    <div className="description event">{user.event}</div>
                                </div>
                            </div>
                        </header>
                        <footer>
                            <ActionButton url="/logout">
                                <div className="logout ui left floated secondary button inverted">
                                    <i className="left chevron icon"></i>Log Out
				            </div>
                            </ActionButton>
                        </footer>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStatetoProps = (state) => {
    const { user } = state.account
    return {
        user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(accountAction, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(UserCard);

