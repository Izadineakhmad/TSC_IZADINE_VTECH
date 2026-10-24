import React, { type ReactNode } from 'react'

type imageType  = {
  img : string;
  title : ReactNode;
  desc : ReactNode;
  className? : string;
}

export default function HomepageImageSection({img, title, desc, className} : imageType)  {
  return (
    <section className='homepage-image-section'>
        <div className='homepage-image-container'>
            <img src={img} alt="Community"  className={`homepage-image ${className}`}/>
            <div className='homepage-image-overlay'></div>
            <div className='homepage-image-text-container'>
                <h3 className='homepage-image-title' style={{cursor: 'default'}}>{title}</h3>
                <p className='homepage-image-desc'>
                  {desc}
                </p>
            </div>
        </div>
    </section>
  )
}
