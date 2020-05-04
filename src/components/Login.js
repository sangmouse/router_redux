import React, { Component } from 'react';
import {Redirect } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state={
            txtUsername : '',
            txtPassword : ''
        }
    }
    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name] : value
        })
    }
    onLogin = (e) => {
        e.preventDefault()
        var {txtUsername, txtPassword} = this.state
        if(txtUsername === 'admin' && txtPassword === 'admin'){
            localStorage.setItem('user', JSON.stringify({
                username : txtUsername,
                password : txtPassword
            }))
        }
    }

    render() {
        var {txtUsername, txtPassword} = this.state
        var loggedInUser = localStorage.getItem('user')
        if(loggedInUser !== null){
            var {location} = this.props
            return <Redirect to = {{
                pathname : '/products',
                state : {
                    from : location
                }
            }} />
        }
    

        return (
            <div className="row">
                <div className="col-6">
                    <form onSubmit = {this.onLogin}>
                        <div className="form-group">
                            <label>Username: </label>
                            <input 
                            className="form-control" 
                            type="text" 
                            name="txtUsername" 
                            value={txtUsername}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input 
                            className="form-control" 
                            type="password" 
                            name="txtPassword" 
                            value={txtPassword}
                            onChange={this.onChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Đăng nhập</button>
                    </form>

                </div>
            </div>
        );
    }
}

export default Login;

