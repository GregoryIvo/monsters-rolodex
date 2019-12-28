import React from 'react';

import './search-box.component.css';

//this will be a functional component
//this wont be a class therefor it wont have many of the predefined constructors like state

//if you dont need state, or lifecycle method use functional component

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className='search'
    type='search' 
      placeholder={placeholder}
      onChange={handleChange}
      /> 
)