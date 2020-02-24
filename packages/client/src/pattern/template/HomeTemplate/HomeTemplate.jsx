import React from 'react'
import { homeTemplate } from './HomeTemplate.scss'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.prop'
import { FindDogBreed } from '../../organism/FindDogBreed'

export function HomeTemplate() {
  return (
    <div className={homeTemplate}>
      <FindDogBreed />
    </div>
  )
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes
