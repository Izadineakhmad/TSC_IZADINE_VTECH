import React, { type PropsWithChildren } from 'react'

export default function Paragraph({children}: PropsWithChildren) {
  return (
    <p className='paragraph'>{children}</p>
  )
}
