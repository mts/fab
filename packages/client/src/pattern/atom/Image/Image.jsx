import React from 'react'
import cx from 'classnames'
import { imageDefaultProps, imagePropTypes } from './Image.prop'
import { image } from './Image.scss'

export function Image({ className, source }) {
  const { src, alt } = source

  return (
    <div className={cx(className, image)}>
      <img src={src} alt={alt} />
    </div>
  )
}

Image.defaultProps = imageDefaultProps

Image.propTypes = imagePropTypes
