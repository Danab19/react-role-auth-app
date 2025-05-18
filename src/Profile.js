import React from 'react';

const Profile = ({ userType }) => {
    return (
        <div>
            <h2>Profile</h2>
            <p>Welcome, {userType === 'admin' ? 'Admin' : 'User'}!</p>
        </div>
    );
};

export default Profile;
