import React from 'react'

function FilterByName({name, setName, filter}) {
    function handleChange(e){
        setName(e.target.value.toLowerCase())
    }    
  return (
    <div>
        <label>Filter by {filter} </label>
        <input value={name} onChange={handleChange}/>
    </div>
  )
}

export default FilterByName