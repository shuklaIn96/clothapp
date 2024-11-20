import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const DeleteMethod = () => {
    // State to store mock data
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true); // Fix: useState instead of useEffect

    // Fetch mock data from JSONPlaceholder API
    const fetchData = async () => {
        try {

            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const jsonData = await response.json(); // Fix: correct json method
            setData(jsonData);
            setloading(false); // Update loading state after data is fetched

        } catch (error) {
            console.error("Error fetching data:", error);
            setloading(false); // Stop loading even on error
        }
    };

    useEffect(() => {
        fetchData(); // Call the fetch function inside useEffect to fetch data on component mount
    }, []);


   // Delete data based on its ID
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        // Remove the deleted item from the data array
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

    return (
        <div>
            <h1>API Delete Method</h1>
            {/* Passing loading and data as props to FetchDelete */}
            <FetchDelete loading={loading} data={data} handleDelete={handleDelete} />
        </div>
    );

}

   
// FetchDelete component now accepts loading and data as props
function FetchDelete({ loading, data,handleDelete }) {
    return (
        <>
            {/* <h1>Fetch Delete</h1> */}
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td> {/* Fix: Use item.title instead of item.item */}
                                    <td> <button onClick={()=>handleDelete(item.id)}>Delete</button> </td> {/* Fix: Use item.title instead of item.item */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
export default DeleteMethod;