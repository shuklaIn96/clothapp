import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import React, {useState, useEffect} from "react";

function FetchAPI(){

    const [data, setData] = useState ([]);
    const [loading, setloading] = useState (true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        // data return
        .then((Response)=>{
            console.log(Response);
            if(!Response.ok){
                throw new Error("Network response was not ok");
            }
            return Response.json();
        })

        // data read.
        
        .then((data)=>{
            setData(data);
            setloading(false);
            console.log(data)
        })
        .catch((error)=>console.log("Error", error));
    },[]);

    return(
        <>
        <h1>FetchAPI</h1>
        <div>
            {loading ? (
                <p>Loading Data ...</p>
            ):(
                <table>
                <thead>
                {
                    data.map((list,index)=>(
                        <tr key={index}>
                        <th>{list.id}</th>
                        <th>{list.title}</th>
                        <th>{list.url}</th>
                        <th>{list.thumbnailUrl}</th>
                    </tr>
                    ))
                }
                
                </thead>
            </table>
            )}
        </div>
        </>
    );
}

export default FetchAPI;