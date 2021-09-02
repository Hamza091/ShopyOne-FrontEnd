import './SearchBar.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import IProduct from '../ProductsInterface'
import Products from '../Products/Products'

function SearchBar() {
    
    const [input,setInput] = useState<string>("")
    const [data,setData] = useState<Array<IProduct>>([])
    const [selectedValue,setSelectedValue] = useState<string>("default")
    const [loadingData,setLoadingData] = useState<boolean>(false)
    
    useEffect(()=>{
        setLoadingData(false)
    },[data])
    
    async function handleClick(){
         
        if(input.length>0){
            
            setLoadingData(true)
            
            try{
                // 
                const searchResults = await axios.get('http://127.0.0.1:8000/scrap/',{
                    params:input
                })

                setData(searchResults.data)
            }
            catch(e){
                console.log(e)
            }

            setInput("")
        }
    }

    function getSelectValue()
    {
        setSelectedValue(((document.getElementById("dropdown") as HTMLInputElement).value))
    }
    
    return (
        <div className="main-container">
            
            <div className="search-container">
                <div className="search-bar">
                    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="product name..." id="search"/>
                    
                    {
                        loadingData?
                        <div className="loading">
                            <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                        </div>
                        
                        :

                        <div className="button-container">
                            <button className="button" onClick={handleClick}>Search</button>
                        </div>
                    }

                    {
                        data.length>0?  
                            
                            <select className="selectMenu" name="website" id="dropdown" onChange={getSelectValue} >
                                <option value="default">Sort By</option>
                                <option value="amazon">Amazon</option>
                                <option value="daraz">Daraz</option>
                            </select>
                        
                        :
                        
                        null
                    }

                </div>
            </div>

                {/* render products when there is some product in array */}
            {data.length>0?<Products productProps={{data,selectedValue}}/>:null}
    
        </div>
    )
    
}

export default SearchBar
