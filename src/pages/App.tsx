import '../App.css';
import LayoutHeader from '../layouts/LayoutHeader';
import promoVideo from '../assets/promo.mp4';
import ItemCards from '../components/ItemCards';
import {CashmereProducts} from '../json/CashmereProducts.ts';
import HeroVideo from '../components/HeroVideo.tsx';
import MarginnedSection from '../layouts/MarginnedSection.tsx';
import SectionTitle from '../components/SectionTitle.tsx';
import AboutSection from '../components/AboutSection.tsx';
import RateSection from '../components/RateSection.tsx';
import ProductSection from '../components/ProductSection.tsx';
import { OuterwearProducts } from '../json/OuterwearProducts.ts';
import { CottonProducts } from '../json/CottonProducts.ts';
import { CargoProducts } from '../json/CargoProducts.ts';
import StyleSection from '../components/StyleSection.tsx';
import HomepageImageSection from '../components/HomepageImageSection.tsx';
import StyleRateSection from '../components/StyleRateSection.tsx';
import Footer from '../components/Footer.tsx';
import HomepageImage from '../assets/comunity.webp';
import InspoImage from '../assets/inspo.jpg';
import StyledLogo from '../components/StyledLogo.tsx';
import ServiceFormSection from '../components/ServiceFormSection.tsx';
import BookButton from '../components/BookButton.tsx';
function App() {
  return (
    <>
    <div className='app-container'>
        <LayoutHeader />
      <main>
        <HeroVideo promoVideo={promoVideo} />
        <MarginnedSection>
          <h2 className='center-collection'>PICK YOUR STYLE</h2>
        </MarginnedSection>
        <ProductSection id='sweatshirt' products={CashmereProducts} title='Downtown Legacy' /> 
        <ProductSection id='outerwear' products={OuterwearProducts} title='Raw Neutral Luxe' /> 
        <ProductSection id='cotton' products={CottonProducts} title='Midnight Monochrome' /> 
        <MarginnedSection>
        <BookButton />
        </MarginnedSection>
        <HomepageImageSection 
          img={HomepageImage} 
          desc={<>
          Di bloom, kami percaya bahwa gaya berbusana sejati tidak lahir dari mengikuti perputaran tren secara tergesa-gesa, melainkan dari kesederhanaan, kenyamanan, dan kualitas yang bertahan lama. 
          Pakaian yang Anda kenakan merupakan cerminan dari karakter, nilai, dan kepercayaan diri Anda
          </>} 
          title={
          <>
          <StyledLogo />  Winter 2026
          </>
          }
          />
        <StyleRateSection />
          <HomepageImageSection 
          img={InspoImage}
          title={<>
          Our Inspiration :  ASAP ROCKY
          </>}
          desc='Ikon utama yang mendefinisikan gabungan elevated streetwear dan casual luxury. Ia menjembatani budaya jalanan yang otentik dengan kerapian busana high-fashion.'
          className='image-inspo'
          />
        <AboutSection />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
