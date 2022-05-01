import React from 'react';
import './SearchBox.css';
import { BsSearch } from 'react-icons/bs';

export const SearchBox = () => {
  return (
    <div className='search_box'>
      <BsSearch/>
      <input type="search" placeholder='Buscar Usuarios' className='box_search'/>
    </div>
  )
}
