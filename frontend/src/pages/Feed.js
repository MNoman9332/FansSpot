import React from 'react';

const Feed = () => {
    return (
        <div>
            <h1>User Feed</h1>
            <form>
                <textarea placeholder="What's on your mind?" />
                <button type="submit">Post</button>
            </form>
            <h2>Your Posts</h2>
            {/* Map over user posts here */}
            <h2>Friends List</h2>
            {/* Display friends list here */}
        </div>
    );
};

export default Feed;