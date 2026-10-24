import React, { type PropsWithChildren, type ReactNode } from 'react'

type titleType = {
  children : ReactNode;
  id? : any | null;
}

export default function SectionTitle({children, id}: titleType) {
  return (
    <h2 className='section-title' id={id}>
        {children}
    </h2>
  )
}