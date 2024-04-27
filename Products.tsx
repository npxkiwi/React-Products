import React from "react";
import './ProductStyle.css'
interface ProductsProps {
    name: string;
    price: number;
    imgUrl: string;
}

const Products: React.FC<ProductsProps> = ({name,price,imgUrl}) => {
    return (
        <div className="product">
            <img src={imgUrl} alt={name} />
            <h3>{name}</h3>
            <p>{price} kr.</p>
        </div>
    )
}

export default Products;