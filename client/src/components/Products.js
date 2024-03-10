import React from "react";
import '../style/Products.css'
import axios from "axios";
import { useEffect, useState } from 'react';

export default function Products({ pharmacyId }) {
    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        if (pharmacyId !== null) {
            axios.get(`http://localhost:3001/pharmacy/${pharmacyId}/products`).then((response) => {
                setListOfProducts(response.data);
            });
        }
    }, [pharmacyId]);

    const addToCart = async (name, price, image) => {
        try {
            const response = await axios.post("http://localhost:3001/cart", {
                name: name,
                price: price,
                img: image
            });
            console.log(response.data)
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <div className="product-place">
            <div className="boxes-product">
                {listOfProducts.map((value, key) => {
                    return (
                        <div className="box-product">
                            <div className="image">
                                <img
                                    src={value.image}
                                    alt="img"
                                />
                            </div>
                            <div className="inf-buy">
                                <div className="info"> <p> Name: {value.name}<br />Price: {value.price} UAH </p> </div>
                                <button
                                    name="buy"
                                    className="buttonBuy"
                                    onClick={() => addToCart(value.name, value.price, value.image)}
                                >
                                    add to Cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};