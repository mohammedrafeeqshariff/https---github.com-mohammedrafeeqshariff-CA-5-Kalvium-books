import './search.css'

const Search = ({setSearch}) => {

  const handleSearch = (e)=>{
    setSearch(e.target.value)
}

  return (
    <div className='searchcontainer' >
        <div className="search">
            <input type="text" placeholder="search by author or books" id="search" onChange={handleSearch}/>
        </div>
    </div>
  )
}

export default Search
