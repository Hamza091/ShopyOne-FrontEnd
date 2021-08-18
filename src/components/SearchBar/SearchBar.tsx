import './SearchBar.css'
import {useState} from 'react'
import axios from 'axios'

function SearchBar() {

    const [input,setInput] = useState<string>("")

    async function handleClick(){
         
        try{
            const data = await axios.get('http://localhost:8000/scrap/')
            console.log(data)
        }
        catch(e){
            console.log(e)
        }
        setInput("")
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="product name..." id="search"/>
                <div className="button-container">
                    <button className="button" onClick={handleClick}>Search</button>
                </div>
            </div>
        </div>
    )
    
}

export default SearchBar
