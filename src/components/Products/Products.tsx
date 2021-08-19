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

                    <a  href={product.product_link} target="_blank" className="product">
                        <img src={product.product_image?product.product_image:"noimage.jpg"} alt=""/>
                        <span>{product.title}</span>
                        <span>{product.price}</span>

                            {/* rendering stars according to given ratings */}
                        <div className="product-ratings">
                            {
                                
                            product.ratings?  [...Array(parseInt((product.ratings).charAt(0)))].map(()=>(
                                    <span className="fa fa-star checked st"></span>
                                )):null

                            }
                            {
                            product.ratings? [...Array(5-parseInt((product.ratings).charAt(0)))].map(()=>(
                                    <span className="fa fa-star st"></span>
                                )):null
                            }
                        </div>
                    </a>
                   
                ))
            }
        </div>
    )
}

export default Products
