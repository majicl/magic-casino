import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionButton } from '../../components'
import { accountAction } from '../../actions'
import styled from 'styled-components'

const LoaderContainer = styled.div`
    line-height: 36px
`

class UserCard extends Component {

    onLogoutHandler = (e) => {
        e.preventDefault()
        this.props.logout(this.props.user)
    }

    componentWillReceiveProps(props) {
        if (!props.user) {
            props.history.push("/")
        }
    }

    navToLoginHandler = (e) => {
        e.preventDefault()
        this.props.history.push("/")
    }

    render() {
        const { user, loginLoading } = this.props
        return (
            <React.Fragment>
                {
                    !user &&
                    <ActionButton
                        onClick={this.navToLoginHandler}
                        url="/"
                    >
                        <div className="logout ui left floated secondary button inverted">
                            Log In <i className="right chevron icon"></i>
                        </div>
                    </ActionButton>
                }
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
                            <ActionButton
                                url="/logout"
                                onClick={this.onLogoutHandler}
                            >
                                <div className="logout ui left floated secondary button inverted">
                                    <i className="left chevron icon"></i>Log Out
				                </div>
                            </ActionButton>
                            {
                                loginLoading &&
                                <LoaderContainer><i>Logging out...</i></LoaderContainer>
                            }
                        </footer>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStatetoProps = (state) => {
    const { user, loginLoading } = state.account
    return {
        user,
        loginLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(accountAction, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(UserCard)

