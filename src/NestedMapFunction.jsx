import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

function NestedMapFunction() {

    // Example 1
    const CountriesWithcities = [
        {
            country: "USA",
            cities: ["New Work", "Los Angeles", "chicago"],
        },
        {
            country: "India",
            cities: ["Mumbai", "Pune", "Delhi"],
        },
    ]


    // Example 2
    const nestedData = [
        {
            category: "fruits",
            items: ["Apple", "banana", "Orange"]
        },
        {
            category: "Vagetable",
            items: ["carrot", "banana1", "Orange1"]
        },
    ]
    return (
        <>
            <div className="App">
                <h1>Nested Map Function</h1>

                {/* Example 1 */}
                <ul>
                    {CountriesWithcities.map((countryObj, index) => (
                        <li key={index}>
                            <b>{countryObj.country}</b>
                            <ul>
                                {countryObj.cities.map((cities, citiesindex) => (
                                    <li>{cities}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <Container>
                    <Row>
                        <Col>
                            <Table className="Table">
                                <thead>
                                    <tr>
                                        <th>category</th>
                                        <th>item</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {nestedData.map((nestedDataObj, index) => (
                                        <li key={index}><b>{nestedDataObj.category}</b>
                                        </li>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
}

export default NestedMapFunction;