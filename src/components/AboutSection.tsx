import MarginnedSection from '../layouts/MarginnedSection'
import SectionTitle from './SectionTitle'
import AboutUs from '../assets/about_us.jpeg';


export default function AboutSection() {
  return (
    <section className='description-section'>
      <MarginnedSection>
        <div className='description-container'>
            <SectionTitle>About Us</SectionTitle>
          <div className='description-bottom'>
            <p className='description-text'>
              Di bloom, kami percaya bahwa gaya berbusana sejati tidak lahir dari mengikuti perputaran tren secara tergesa-gesa, melainkan dari kesederhanaan, kenyamanan, dan kualitas yang bertahan lama. Pakaian yang Anda kenakan merupakan cerminan dari karakter, nilai, dan kepercayaan diri Anda, sehingga kami hadir bukan sekadar sebagai penyedia busana, melainkan sebagai konsultan gaya personal yang siap mendampingi perjalanan gaya Anda. Melalui pendekatan Capsule Wardrobe, kami memandu Anda mengurasi serta membangun koleksi pakaian esensial berdaya guna tinggi yang mudah dipadupadankan untuk berbagai kesempatan, mulai dari olahan pure cashmere premium hingga potongan klasik yang abadi dengan perhatian penuh pada detail dan tekstur terbaik. Kami meyakini bahwa memiliki koleksi yang terkurasi dengan bijak jauh lebih bernilai daripada lemari yang penuh namun membingungkan, dan komitmen kami adalah membantu Anda menemukan identitas gaya yang autentik, elegan, serta tahan melintasi perputaran zaman.
              </p>
            <img className='description-image' src={AboutUs} alt="About Us Images" />
          </div>
          </div>
      </MarginnedSection>
    </section>
  )
}
