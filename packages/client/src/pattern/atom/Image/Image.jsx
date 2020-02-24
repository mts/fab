import React from 'react'
import { imageDefaultProps, imagePropTypes } from './Image.prop'
import { image } from './Image.scss'

export function Image({ randomImage }) {
  const { src, alt } = randomImage

  return (
    <div className={image}>
      <img src={src} alt={alt} />
    </div>
  )
}

Image.defaultProps = imageDefaultProps

Image.propTypes = imagePropTypes
