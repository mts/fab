import React from 'react'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.prop'
import { FindDogBreed } from '../../organism/FindDogBreed'

export function HomeTemplate() {
  return <FindDogBreed />
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes
