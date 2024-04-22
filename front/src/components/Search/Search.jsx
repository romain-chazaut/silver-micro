function Search() {
    return(
        <div className="search-wrapper">
            <h2>what are you looking for ?</h2>
                <form action="">
                    <input type="text" id="search" name="search" placeholder='search...'/>
                    <div className="results"></div>
                    <div className="search-buttons">
                        <button id="book-button" type="submit">Book</button>
                        <button id="view-button" type="submit">View more</button>
                    </div>
                </form> 
        </div>
    )
}

export default Search;