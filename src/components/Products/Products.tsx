import IProduct from '../ProductsInterface'
import './Products.css'


interface productprops{
    productProps:{
        data:Array<IProduct>,
        selectedValue:string
    }
}

function Products({productProps}:productprops) {
    return (

        <div className="products-container">
            {
                productProps.selectedValue==="default"?

                    productProps.data.map((product,index)=>(
                
                        <a key={index} href={product.product_link} target="_blank" className="product">
                            <span className="product-name">{product.name}</span>
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

                    :

                    productProps.data.map((product,index)=>(
                        product.name===productProps.selectedValue?
                        <a key={index} href={product.product_link} target="_blank" className="product">
                            <span className="product-name">{product.name}</span>
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
                            :null  
                ))
            }
        </div>
    )
}

export default Products
