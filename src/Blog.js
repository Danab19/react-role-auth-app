import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data.slice(0, 10))); // Fetch first 10 posts
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            <div className="row">
                {posts.map((post) => (
                    <div className="col-md-4 mb-4" key={post.id}>
                        <div className="card">
                            <div className="card-header">Post #{post.id}</div>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
