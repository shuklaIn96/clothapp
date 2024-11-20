import React from "react";

function ArrayMap() {
    // Example 1
    const name = ["Apple", "Banana", "Orange"];

    // Example 2
    const products =[
        {
            id:1,
            name: "Product 1",
            Price: 10,
        },
        {
            id:2,
            name: "Product 2",
            Price: 20,
        },
    ]

    // Example 3 retune map function
    const fruits = ["Apple", "Banana", "Orange"];
    const fruitsItems = fruits.map((fruits,index)=><li key={index}>{fruits}</li>);
    
    return (
        <>
            <div className="App">
                <h1>Array with Map Function</h1>

                {/* Example 1 */}
                <ul>
                    {name.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>

                {/* Example 2 */}
                <ul>
                    {products.map((products)=>(
                        <li key={products.id}>{products.name} - {products.Price}</li>
                    ))}
                </ul>

                <ul>
                   <li> {fruitsItems}</li>
                </ul>

            </div>
        </>
    );
}

export default ArrayMap;