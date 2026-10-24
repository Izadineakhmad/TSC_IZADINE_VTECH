import StyleSection from './StyleSection'
import RateSection from './RateSection'
import MarginnedSection from '../layouts/MarginnedSection'

export default function StyleRateSection() {
  return (
    <section className='style-rate-section'>
            <MarginnedSection>
                <div className='style-rate-container'>
                    <div className='style-wrapper'>
                        <StyleSection/>
                    </div>
                    <div className="rate-wrapper">
                        <RateSection />
                    </div>
                </div>
            </MarginnedSection>
    </section>
  )
}
