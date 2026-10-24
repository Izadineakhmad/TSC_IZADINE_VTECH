import React from 'react'

type ItemProps = {
    source : string;
    judul? : string;
    harga? : string;
}

export default function ItemCards({source, judul, harga} : ItemProps ) {
  return (
    <article className='item-card'>
        <img src={source} className='item-image' alt={judul}/>
        <h3 className='item-title'>{judul}</h3>
        <p className='item-price'>{harga}</p>
    </article>
  )
}