import {type JSX, useState} from "react";

interface Product {
    id: number;
    name: string;
    price: number;
}

interface productItemProps {
    product: Product;
}

const ProductItem = ({product}: productItemProps): JSX.Element => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>price: {product.price}$</p>
        </div>
    )
}

export const ProductList = () => {
    const [products] = useState<Product[]>([
        {id: 1, name: 'phone', price: 150},
        {id: 2, name: 'laptop', price: 240},
    ])

    return (
        <div>
            {
                products.map(p => (
                    <ProductItem key={p.id} product={p}/>
                ))
            }
        </div>
    )
}