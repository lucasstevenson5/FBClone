import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="wrapper">
                <img src={this.props.user.profileImg} alt="User Image" />
                <p>{this.props.user.username}</p>
                { this.props.notCurrentUser && 
                    <button onClick={() => this.props.addFriend(this.props.userId)}>
                        Friend Me!
                    </button> 
                }
                <Link to="/post/new">Add a post!</Link>
                {this.props.user.posts && this.props.user.posts.map((post, id) => {
                    return (
                        <div className="post" key={id}>
                            <h5>{post.title}</h5>
                            <p>{post.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Profile;