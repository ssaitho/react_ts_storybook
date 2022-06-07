import * as React from 'react'
import { SVGProps } from 'react'

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="m7 9.5 5 5 5-5H7Z" />
  </svg>
)

export default SvgArrow
