import React from 'react'

type HeroVideoType = {
    promoVideo : string;
}

export default function HeroVideo({promoVideo} : HeroVideoType) {
  return (
    <section className='video-section'>
        <video src={promoVideo} playsInline muted loop autoPlay width="100%" disablePictureInPicture className='promo-video'/>
        <div className='video-overlay' />
        <h1 className='hero-text'>FIND YOUR STYLES HERE <br /> AT  <span className='hero-name'>bloom</span></h1>
      </section>
  )
}
