import React, { useState, useMemo, useEffect } from "react";
import Items from "./Items";
import initialOrders from '../order_data/data';

function Order() {
    const [orders, setOrders] = useState(initialOrders);
    const [shippingPrice, setShippingPrice] = useState(() =>{ return 9.99});

    useEffect(() => {
        if (orders.length === 0) {
            setShippingPrice(0);
        } else {
            setShippingPrice(9.99);
        }
    }, [orders]);

    const totalPrice = useMemo(() => {
        let total = 0;
        for (let i = 0; i < orders.length; i++) {
            total += orders[i].itemPrice;
        }
        return parseFloat(total);
    }, [orders]);

    const removeItem = (index) => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    return (
        <div id="order">
            <h4>ORDER DETAILS</h4>
            <div className="items-info">
                <p>Total items</p>
                <p>{orders.length} {(orders.length>1 || orders.length==0)?'items':'item'}</p>

            </div>
            <div className="items">
                <Items orders={orders} removeItem={removeItem} />
            </div>
            <div className="shipping-price">
                <p>Shipping</p>
                <p className="price">${shippingPrice}</p>
            </div>
            <div className="total-price">
                <p>Total</p>
                <p>${(totalPrice + shippingPrice).toFixed(2)}</p>
            </div>
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Order;
