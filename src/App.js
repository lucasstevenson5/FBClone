import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';

// Header, Footer, Friend List, Profile, Posts
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "LJStevenson",
        password: "iscool",
        profileImg: "https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/star-lord-feature-villain.jpg",
        posts: [],
        friends: []
      },
      loggedIn: false,
      error: ""
    }

    this.logIn = this.logIn.bind(this);
  }

  logIn(event, userData) {
    event.preventDefault();
    const user = this.state.user;
    if (userData.username === user.username && userData.password === user.password) {
      this.setState({
        loggedIn: true,
        error: ""
      })
      this.props.history.push('/profile')
      localStorage.setItem('jwt', 'abcdefghijklmnopqrstuvwxyz')
    } else {
      this.setState({
        error: "incorrect credentials"
      })
    }
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/');
    this.setState({
      loggedIn: false
    })
  }

  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      this.setState({
        loggedIn: true
      })
    }
  }

  render() {
    return (
      <div className="App">
          <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
          <Route path="/login" render={() => 
            <LoginForm logIn={this.logIn} error={this.state.error} /> 
          } />
          <Route path="/profile" render={() => 
            <Profile user={this.state.user} />
          } />
      </div>
    );
  }
}

export default withRouter(App);
