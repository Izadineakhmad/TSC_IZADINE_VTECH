import React from 'react'
import ItemCards from './ItemCards'
import SectionTitle from './SectionTitle'
import MarginnedSection from '../layouts/MarginnedSection'

type productType = {
        id : string;
        source : string;
        judul : string;
        harga : string;
}

type productTypeProps = {
    products : productType[];
    title : string;  
    id : string;
}

export default function ProductSection({products, title, id} : productTypeProps) {
  return (
        <MarginnedSection>
             <section className='product-section' id={id}>
                <SectionTitle>{title}</SectionTitle>
                    <div className="product-grid">
                      {
                        products.map((product) => (
                          <div key={product.id}>
                            {
                              parseInt(product.id.charAt(product.id.length - 1)) != products.length ? 
                              <ItemCards source={product.source} judul={product.judul} harga={product.harga}/>
                              : (
                                  <img className='product-model-image' src={product.source} style={{width: "100%", height: '100%', 'objectFit' : 'cover'}}/>
                              )
                            }
                            </div>
                        ))
                      }
                    </div>
            </section>  
        </MarginnedSection>
  )
}