import React, { useRef } from 'react'
import styled from 'styled-components'

const Search = styled(({ className, onSubmitSearch, value }) => {
  const inputRef = useRef()
  const handleSubmitSearch = () => {
    const { value } = inputRef.current
    value && onSubmitSearch(value)
  }

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="text"
        onKeyDown={event => event.key === 'Enter' && handleSubmitSearch()}
        defaultValue={value}
      />
    </div>
  )
})`

`
export default Search
