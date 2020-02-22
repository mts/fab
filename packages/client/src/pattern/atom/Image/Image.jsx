import React from 'react'
import cx from 'classnames'
import { imageDefaultProps, imagePropTypes } from './Image.prop'
import { image } from './Image.scss'

export function Image({ className }) {
  return <div className={cx(className, image)}>Image under construction</div>
}

Image.defaultProps = imageDefaultProps

Image.propTypes = imagePropTypes
