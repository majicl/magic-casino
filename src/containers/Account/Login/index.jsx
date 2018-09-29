import React, { Component } from 'react'
import { Header } from '../../../components'
import { TextInput } from '../../../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { accountAction } from '../../../actions'

class Login extends Component {

  componentWillReceiveProps(props) {
    if (props.user && props.user.name) {
      props.history.push("/")
    }
  }

  state = {
    user: {
      username: '',
      password: ''
    },
    error: '',
    loginLoading: false
  }

  onSubmitHandler = (e) => {
    e.preventDefault()
    this.props.login(this.state.user)
  }

  onTextChange = (e) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    const { error, loginLoading } = this.props
    return (
      <React.Fragment>
        <Header />
        <div className="main container">
          <div className="login">
            <div className="ui grid centered">
              <form onSubmit={this.onSubmitHandler}>
                <div className="fields">

                  <TextInput
                    type="text"
                    placeholder="Username"
                    iconClass="user icon"
                    name="username"
                    onChange={this.onTextChange}
                  />

                  <TextInput
                    type="password"
                    placeholder="Password"
                    iconClass="lock icon"
                    name="password"
                    onChange={this.onTextChange}
                  />

                  <div className="field">
                    <div className="ui icon input">
                      <input type="submit" value="Login" />
                      <i className="right chevron icon"></i>
                    </div>
                  </div>

                  <div className="field">
                    <div className="ui icon input">
                      {loginLoading && <i>Logging...</i>}
                    </div>
                  </div>

                  <div className="field">
                    <div className="ui icon input">
                      {error && <span>{error}</span>}
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStatetoProps = (state) => {
  const { user, error, loginLoading } = state.account
  return {
    user,
    error,
    loginLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(accountAction, dispatch)
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Login);
