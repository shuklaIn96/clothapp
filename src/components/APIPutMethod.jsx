import React, { useState, useEffect } from "react";

function APIPutMethod() {
    const [postData, setPostData] = useState({
        id: 1, // Default to post with ID 1
        title: "",
        body: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value,
        });
    };

    // Fetch post data on initial load based on ID
    useEffect(() => {
        const postId = postData.id;
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setPostData(data); // Set fetched post data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [postData.id]);

    // Handle form submission to update post
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        setLoading(true); // Show loading state

        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;
        
        fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData), // Send updated post data
        })
            .then((response) => response.json())
            .then((data) => {
                setMessage("Post updated successfully!");
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error updating post:", error);
                setMessage("Failed to update the post.");
                setLoading(false);
            });
    };

    return (
        <>
            <h1>API PUT Method</h1>

            {loading && <p>Loading...</p>}
            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={postData.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea name="body" value={postData.body} onChange={handleChange} />
                </div>
                <button type="submit">Update Post</button>
            </form>
        </>
    );
}

export default APIPutMethod;
