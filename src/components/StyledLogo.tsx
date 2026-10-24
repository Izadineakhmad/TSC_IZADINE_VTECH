import React, { type ComponentPropsWithoutRef } from 'react'

interface styleType extends ComponentPropsWithoutRef<"span"> {
    className? : string;
}

export default function StyledLogo({className, ...rest} : styleType) {
  return (
    <span className={`styled-logo ${className}`} {...rest} >bloom</span>
  )
}
