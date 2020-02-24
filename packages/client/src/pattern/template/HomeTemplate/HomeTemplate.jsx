import React from 'react'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.prop'
import { FindDogBreed } from '../../organism/FindDogBreed'
import { FindCatBreed } from '../../organism/FindCatBreed'
import { homeTemplate } from './HomeTemplate.scss'

export function HomeTemplate() {
  return (
    <div className={homeTemplate}>
      <FindDogBreed />
      <FindCatBreed />
    </div>
  )
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes
