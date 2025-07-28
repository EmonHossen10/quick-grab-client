import React from 'react';
import useAuth from '../../Hooks/useAuth';

const UserHome = () => {
    const {user}=useAuth()
    return (
        <div>
            User Home <br />
            Hi, welcome Back {user?.displayName ? user.displayName : "" }
        </div>
    );
};

export default UserHome;