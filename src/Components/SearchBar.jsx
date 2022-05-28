import React from 'react'

const SearchBar = ({ isLoading ,value, handleSubmit,onChange}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input value={value} placeholder="Search recipes" type="text" className='form-control' disabled={isLoading} onChange={onChange}/>
        <input type="submit" className='button' value="Search" disabled={isLoading || !value}/>
    </form>
  )
}

export default SearchBar;