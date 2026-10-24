import React from 'react'
import StyledLogo from './StyledLogo'

interface serviceType {    
    onClick : (event :React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ServiceFormSection({onClick} : serviceType) {
  return (
    <section className='service-section'>
        <div className='service-container'>
            <div className='form-logo-container'>
                <StyledLogo className='form-logo'/>
            </div>
            <form method="post" className='form-popup'>
                <input type="text" className='service-input' id='service-username' placeholder='Fullname'/>
                <input type="email" className='service-input' id='service-email' placeholder='Email' />
                <textarea name="address" id="service-address" className='service-input'  rows={1} style={{fontFamily : 'Inter'}} placeholder='Address'/>
                <button className='service-btn' type='submit' onClick={onClick}>BOOK A RESERVATION</button>
            </form>
        </div>
    </section>
    )
}
