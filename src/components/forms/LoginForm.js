import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                { this.props.error && <h4 className="error-text">{this.props.error}</h4> }
                <form onSubmit={(e) => this.props.logIn(e, this.state)}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={this.onChange}
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Log In" />
                </form>
            </div>
            
        )
    }
}

export default LoginForm;