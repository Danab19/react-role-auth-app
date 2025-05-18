import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Profile from './Profile';
import Admin from './Admin';
import Blog from './Blog';

const App = () => {
    const [userType, setUserType] = useState(null);
    const [currentPage, setCurrentPage] = useState('blog');

    const handleLogin = (type) => {
        setUserType(type);
    };

    const handleLogout = () => {
        setUserType(null);
        setCurrentPage('blog');
    };

    return (
        <div>
            {/* Navbar */}
            {userType && (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">React Blog</a>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={() => setCurrentPage('blog')}>Blog</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={() => setCurrentPage('profile')}>Profile</button>
                            </li>
                            {userType === 'admin' && (
                                <li className="nav-item">
                                    <button className="btn btn-link nav-link" onClick={() => setCurrentPage('admin')}>Admin</button>
                                </li>
                            )}
                            <li className="nav-item">
                                <button className="btn btn-danger nav-link" onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}

            {/* Page Content */}
            <div className="container mt-4">
                {!userType && <Login onLogin={handleLogin} />}
                {userType && currentPage === 'blog' && <Blog />}
                {userType && currentPage === 'profile' && <Profile userType={userType} />}
                {userType === 'admin' && currentPage === 'admin' && <Admin />}
                {userType !== 'admin' && currentPage === 'admin' && <p>Access Denied</p>}
            </div>
        </div>
    );
};

export default App;
