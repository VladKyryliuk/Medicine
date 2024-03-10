import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/Cart.css";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost:3001/cart');
            setCartItems(response.data);
            calculateTotalPrice(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            await axios.delete(`http://localhost:3001/cart/${itemId}`);
            fetchCartItems();
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const calculateTotalPrice = (items) => {
        const totalPrice = items.reduce((total, item) => total + parseFloat(item.price), 0);
        setTotalPrice(totalPrice);
    };

    const handleOrderSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
        };
        try {
            await axios.post('http://localhost:3001/cart/2', formData);
            await axios.delete('http://localhost:3001/cart');
            fetchCartItems();
            e.target.reset();
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <div >
            <h2>Your Cart</h2>
            <div className="container-cart">

                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>   <div className="products">
                        <p>Total Price: {totalPrice} UAH</p>
                        {cartItems.map(item => (
                            <div key={item.id} className='object'>
                                <img src={item.img} alt="Product" />
                                <div>
                                    <p>Name: {item.name}</p>
                                    <p>Price: {item.price} UAH</p>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>

                        ))}
                    </div>
                        <form className="form1" onSubmit={handleOrderSubmit}>
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="text" name="address" placeholder="Your Home Address" required />
                            <input type="tel" name="phone" placeholder="Number Phone" required />
                            <input type="email" name="email" placeholder="Email address" required />
                            <button type="submit">Order</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
