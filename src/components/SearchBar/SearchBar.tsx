import './SearchBar.css'

function SearchBar() {
    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder="product name..." id="search"/>
                <div className="button-container">
                    <button className="button">Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
