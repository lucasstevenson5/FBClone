import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';

// Header, Footer, Friend List, Profile, Posts
import Header from './components/Header';
import LoginForm from './components/forms/LoginForm';
import Profile from './components/Profile';
import UserList from './components/UserList';

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
      error: "",
      users: []
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

  addFriend = (userId) => {
    const users = this.state.users;
    const user = this.state.user;
    user.friends.push(users[userId]);
    users.splice(userId, 1);
    this.setState({
      user: user,
      users: users
    })
  }

  async componentDidMount() {
    if (localStorage.getItem('jwt')) {
      const users =  await axios.get("https://randomuser.me/api/?results=10");

      // When working with a real database, first off an http request 
      // with the jwt token to get back the user data
      this.setState({
        loggedIn: true,
        users: users.data.results
      })
    }
  }

  render() {
    return (
      <div className="App">

          <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
          <div className="main-content">
            { this.state.loggedIn && <UserList users={this.state.users} /> }
            <Route path="/login" render={() => 
              <LoginForm logIn={this.logIn} error={this.state.error} /> 
            } />
            <Route exact path="/profile" render={() => 
              <Profile user={this.state.user} />
            } />
            {this.state.users.length > 0 ?
              <Route exact path="/profile/:userId" render={(props) => {
                const user = this.state.users[props.match.params.userId];
                user.username = user.name.first;
                user.profileImg = user.picture.medium
                return <Profile user={user} 
                                notCurrentUser={true} 
                                userId={props.match.params.userId} 
                                addFriend={this.addFriend}
                />
              }} />
            :
              <Redirect to="/profile" />
            }
            { this.state.user.friends.length > 0 && 
              <UserList users={this.state.user.friends} /> 
            }
          </div>
      </div>
    );
  }
}

export default withRouter(App);
