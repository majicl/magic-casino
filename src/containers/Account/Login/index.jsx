import React, { Component } from 'react'
import { Header, TextInput } from '../../../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { accountAction } from '../../../actions'

/**
 * A continer for the login controls
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
  componentWillReceiveProps(props) {
    if (props.user && props.user.name) {
      props.history.push("/games")
    }
  }

  /**
   * state of Login container component
   * @memberOf Login
   */
  state = {
    user: {
      username: '',
      password: ''
    },
    error: '',
    loginLoading: false
  }

  /**
   * The first action after form submitting
   * @memberOf Login
   */
  onSubmitHandler = (e) => {
    e.preventDefault()
    this.props.login(this.state.user)
  }

  /**
   * handler to update state based on input changes
   * @memberOf Login
   */
  onTextChange = (e) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }


  /**
   * handle as a form validation
   * @memberOf Login
   */
  formIsInvalid = () => {
    return !this.state.user
      || !this.state.user.username
      || !this.state.user.password
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
                    required={true}
                    onChange={this.onTextChange}
                  />

                  <TextInput
                    type="password"
                    placeholder="Password"
                    iconClass="lock icon"
                    name="password"
                    required={true}
                    onChange={this.onTextChange}
                  />

                  <div className="field">
                    <div className="ui icon input">
                      <input
                        type="submit"
                        disabled={this.formIsInvalid()}
                        value="Login" />
                      <i className={"right chevron icon " + (loginLoading ? "loading" : "")}></i>
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

/**
 * mapStatetoProps for REDUX connection
 * 
 * @param {any} state 
 * @returns 
 */
const mapStatetoProps = (state) => {
  const { user, error, loginLoading } = state.account
  return {
    user,
    error,
    loginLoading
  }
}
/**
 * mapDispatchToProps for REDUX connection
 * 
 * @param {any} dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(accountAction, dispatch)
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Login)
