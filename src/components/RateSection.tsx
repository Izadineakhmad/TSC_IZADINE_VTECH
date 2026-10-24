import React from 'react'
import MarginnedSection from '../layouts/MarginnedSection'
import SectionTitle from './SectionTitle'

export default function RateSection() {
  return (
            <section className='rate-section'>
              <SectionTitle>Our Top Six Brands</SectionTitle>
              <ol className='rate-list'>
                <li className='rate-list-inside'>Balenciaga</li>
                <li className='rate-list-inside'>CP Company</li>
                <li className='rate-list-inside'>JNCO</li>
                <li className='rate-list-inside'>Comme des Garçons</li>
                <li className='rate-list-inside'>Alexander McQueen</li>
              </ol>
            </section>
)
}
