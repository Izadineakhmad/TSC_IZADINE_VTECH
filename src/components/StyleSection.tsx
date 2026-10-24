import MarginnedSection from '../layouts/MarginnedSection'
import SectionTitle from './SectionTitle'

export default function StyleSection() {
  return (
    <section className='style-section'>
          <SectionTitle> Style Guide </SectionTitle>
          <table className='style-table'>
            <thead>
              <tr>
                <th>Signature Garment</th>
                <th>Premium Material</th>
                <th>Silhouette & Fit</th>
                <th>Curator Occasion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pure Cashmere Sweater</td>
                <td>Grade A Mongolian Cashmere</td>
                <td>Relaxed Oversized Fit</td>
                <td>Private Lounge</td>
              </tr>
              <tr>
                <td>Military Utility Field Jacket</td>
                <td>High Density Cotton Twill</td>
                <td>Structured Boxy Cut</td>
                <td>Urban Exploration</td>
              </tr>
              <tr>
                <td>Heavyweight Organic Tee</td>
                <td>Long Staple Pure Cotton</td>
                <td>Drop Shoulder Fit</td>
                <td>Daily Elevated Wear</td>
              </tr>
              <tr>
                <td>Tailored Wool Cargo Pants</td>
                <td>Premium Wool Blend Fiber</td>
                <td>Pleated Tapered Cut</td>
                <td>Weekend Escape</td>
              </tr>
            </tbody>
          </table>
        </section>
  )
}
