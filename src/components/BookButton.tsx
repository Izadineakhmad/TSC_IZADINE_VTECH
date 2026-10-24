import { useEffect, useState } from "react"
import ServiceFormSection from "./ServiceFormSection";

export default function BookButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <section className='order-btn-section'>
          <div className='order-btn-container'>
              <button className='order-btn' onClick={() => setIsOpen(true)}>
                  RESERVE OUR SERVICES
              </button>
          </div>
      </section>
      {
        isOpen && (
          <>
            <div className="popup-overlay" onClick={() => setIsOpen(false)} />
              <div className="popup-card">
                <ServiceFormSection onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }} />
              </div>
          </>
        )
      }
    </>
  )
}