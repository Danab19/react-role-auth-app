import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            onLogin('admin');
        } else if (username === 'user' && password === 'user') {
            onLogin('user');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-5">
            <h2>Login</h2>
            <div className="form-group">
                <label>Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Login</button>
        </form>
    );
};

export default Login;
