import React from 'react'

const ItemsTags = ({title, links}) => {
  return (
    <a href="/food-log" className='text-color border p-2 rounded-md'>{title}</a>
  )
}

export default ItemsTags
