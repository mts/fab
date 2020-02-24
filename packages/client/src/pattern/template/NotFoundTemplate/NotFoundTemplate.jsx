import React from 'react'
import { Link } from 'react-router-dom'
import { homePagePath } from '../../../route/path'
import { NoMatch } from '../../atom/NoMatch'
import { notFoundTemplateDefaultProps, notFoundTemplatePropTypes } from './NotFoundTemplate.prop'

export function NotFoundTemplate({ location }) {
  return (
    <>
      <h2>Not Found</h2>
      <NoMatch location={location} />
      <Link to={homePagePath}> Back to Home Page</Link>
    </>
  )
}

NotFoundTemplate.defaultProps = notFoundTemplateDefaultProps

NotFoundTemplate.propTypes = notFoundTemplatePropTypes
