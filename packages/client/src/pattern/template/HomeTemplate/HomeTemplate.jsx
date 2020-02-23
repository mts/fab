import React from 'react'
import cx from 'classnames'
import { homeTemplate } from './HomeTemplate.scss'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.prop'
import { FindDogBreed } from '../../organism/FindDogBreed'

export function HomeTemplate({ className }) {
  return (
    <div className={cx(className, homeTemplate)}>
      <FindDogBreed />
    </div>
  )
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes
