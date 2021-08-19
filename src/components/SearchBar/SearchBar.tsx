import './SearchBar.css'
import {useState} from 'react'
import axios from 'axios'
import IProduct from '../ProductsInterface'
import Products from '../Products/Products'

function SearchBar() {

    const [input,setInput] = useState<string>("")
    const [data,setData] = useState<Array<IProduct>>([])

    async function handleClick(){
         
        try{

            const searchResults = await axios.get('http://localhost:8000/scrap/',{
                params:input
            })

            setData(searchResults.data)
        }
        catch(e){
            console.log(e)
        }
        setInput("")
    }

    return (
        <div className="main-container">
            
            <div className="search-container">
                <div className="search-bar">
                    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="product name..." id="search"/>
                    <div className="button-container">
                        <button className="button" onClick={handleClick}>Search</button>
                    </div>
                </div>
            </div>

                {/* render products when there is some product in array */}
            {data.length>0?<Products products={data}/>:null}
    
        </div>
    )
    
}

export default SearchBar
