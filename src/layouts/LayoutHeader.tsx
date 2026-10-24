import React from 'react'

export default function LayoutHeader() {
  return (
    <header className='web-header'>
        <div className='header-container'>
            <span className='logo'>
            bloom
            </span>
            <div className='bottom-header'>
            <span className='collections-text'>
            WINTER 2026 COLLECTIONS
            </span>
            <nav className='header-nav'>
              <ul className='nav-list'>
                  <li><a href="#sweatshirt" className='nav-links'>Downtown</a></li>
                  <li><a href="#outerwear" className='nav-links'>Luxe</a></li>
                  <li><a href="#cotton" className='nav-links'>Monochrome</a></li>
              </ul>
            </nav>
            </div>
        </div>
      </header>
  )
}
