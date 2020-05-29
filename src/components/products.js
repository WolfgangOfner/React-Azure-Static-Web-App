import React from 'react'

const Products = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{product.Name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{product.Price}</h6>
                        <p class="card-text">{product.Description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Products