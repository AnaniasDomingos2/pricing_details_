import React from 'react';

function Items({ orders, removeItem }) {
    function showItems() {
        return (
            orders.map((item, index) => (
                <div key={index} className="item">
                    <div className="item-image">
                        <img src={item.itemImage} alt={item.itemName} className='image' />
                    </div>
                    <div className="item-description">
                        <h3>{item.itemName}</h3>
                        <p>${item.itemPrice}</p>
                    </div>
                    <div className="close" onClick={() => removeItem(index)}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            ))
        );
    }

    return (
        <>
            {showItems()}
        </>
    );
}

export default Items;
