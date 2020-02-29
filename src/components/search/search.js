import React, { useRef } from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

const Search = styled(({ className, onSubmitSearch, value }) => {
  const inputRef = useRef()
  const handleSubmitSearch = () => {
    const { value } = inputRef.current
    value && onSubmitSearch(value)
  }

  return (
    <div className={className}>
      <input
        className="search-input"
        ref={inputRef}
        type="text"
        onKeyDown={event => event.key === 'Enter' && handleSubmitSearch()}
        defaultValue={value}
      />
      <MdSearch
        className="search-button"
        size={24}
        onClick={handleSubmitSearch}
      />
    </div>
  )
})`
display: flex;
.search-input {
  border: 1px solid #000;
  border-radius: 3px 0 0 3px;
}
.search-button {
  cursor: pointer;
  border: 1px solid;
  border-left: none;
  border-radius: 0 3px 3px 0;
}
`
export default Search
