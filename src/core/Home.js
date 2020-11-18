import React, { useState, useEffect } from 'react'

import { getProducts } from "./helper/coreapicalls"
export default function Home() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)

    const loadAllProducts = () => {
        getProducts()
            .then((data) => {
                if (data.error) {
                    setError(data.error)
                    console.log(error)
                } else {
                setProducts(data);
                }
                console.log(data)
            })
    };


    useEffect(() => {
        loadAllProducts();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1> This is the first component </h1>
            <div className="row">
                {products.map((products, index) => {
                    return (
                        <div key={index}>
                            <h1>{products.name}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );;
}