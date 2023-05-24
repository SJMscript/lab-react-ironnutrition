import { useState } from "react"
import { Divider, Input } from 'antd';

function Search(props) {

    const [searchInput, setSearchInput] = useState("")

    const handleSearchChange = (event) => {
       
        setSearchInput(event.target.value)
            
        props.searchFood(event.target.value)
      
    }

  return (
    <>
    
    <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" name="search" value={searchInput} onChange={handleSearchChange} />
    </>
    
  )
}

export default Search


/* import { useState } from "react"

function Search(props) {

    const [searchInput, setSearchInput] = useState("")

    const handleSearchChange = (event) => {
       
        setSearchInput(event.target.value)
            
        props.searchFood(event.target.value)
      
    }

  return (
    <div>
<h2>Search</h2>
    
    <input type="text" name="search" value={searchInput} onChange={handleSearchChange} />

    </div>
  )
}

export default Search */