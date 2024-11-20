import React, { useState } from "react";

function APIPostMethod() {

    // UseState
    const [formData, setFormData] = useState({
        title: "",
        body: "",

    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = "https://jsonplaceholder.typicode.com/posts";

        // create the requrest object
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };



        // Send the POST request
        fetch(apiUrl, requestOptions)
            .then((Response) => Response.json())
            .then((data) => {
                // Handle The Response Data
                console.log("response Data:", data);
            })

            .catch((error) => {
                console.log("Error:", error);
            });
    };



    return (
        <>
            <h1>API Post Method</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea name="body" value={formData.body} onChange={handleChange} />
                </div>
                <button type="submit"> Submit</button>
            </form>
        </>
    );
}

export default APIPostMethod;