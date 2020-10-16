import React from 'react';

import { Link } from 'react-router-dom';

const UserList = (props) => {
    return (
        <aside>
            {props.users.map((user, id) => {
                return (
                    <div key={id} className="user-list">
                        
                        <Link to={`/profile/${id}`}>
                            <img className="friends" src={user.picture.medium} alt="potential friend" />
                            <p>{user.name.first} {user.name.last}</p>
                            <p>{user.location.city}</p>
                        </Link>
                    </div>
                )
            })}
        </aside>
    )
}

export default UserList;