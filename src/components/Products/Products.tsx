import IProduct from '../ProductsInterface'
import './Products.css'

interface productprops{
    products:Array<IProduct>
}

function Products({products}:productprops) {
    return (

        <div className="products-container">
            {
                products.map(product=>(
                    <div className="product">
                        <img src={product.product_image} alt=""/>
                        <span>{product.title}</span>
                        <span>{product.price}</span>
                        <span>{product.ratings}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Products
