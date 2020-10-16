import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Header, Footer, Friend List, Profile, Posts
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "LJStevenson",
        password: "lucasstevenson5",
        profileImg: "https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/star-lord-feature-villain.jpg",
        posts: [],
        friends: []
      },
      loggedIn: false,
      error: ""
    }
  }

  logIn(event, userData) {
    event.preventDefault();
    const user = this.state.user;
    if (userData.username === user.username && userData.password === user.password) {
      this.setState({
        loggedIn: true,
        error: ""
      })
    } else {
      this.setState({
        error: "incorrect credentials"
      })
    }
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Route path="/login" render={() => <LoginForm login={this.logIn} /> } />
        
      </div>
    );
  }
}

export default App;
