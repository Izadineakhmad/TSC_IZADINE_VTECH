import React, { type PropsWithChildren } from 'react'

export default function MarginnedSection({children} : PropsWithChildren) {
  return (
    <div className="marginned-section">
        {children}
    </div>
  )
}
