import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value)

  const debouncedChange = useDebounce(onChange, 500)

  const handleChange = (e) => {
    setDisplayValue(e.target.value)
    debouncedChange(e.target.value)
  }
  return (
    <div>
      <input type="search"
        placeholder='Busque por animes...'
        value={displayValue}
        onChange={handleChange} />
    </div>
  )
}

export default SearchInput