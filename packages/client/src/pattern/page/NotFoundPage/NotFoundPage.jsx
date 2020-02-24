import React from 'react'
import { UnderConstruction } from '../../atom/UnderConstruction'
import { notFoundPageDefaultProps, notFoundPagePropTypes } from './NotFoundPage.prop'

export function NotFoundPage({ location }) {
  return (
    <>
      <UnderConstruction />
      <div>{location.pathname}</div>
    </>
  )
}

NotFoundPage.defaultProps = notFoundPageDefaultProps

NotFoundPage.propTypes = notFoundPagePropTypes

// Default export is required to use with React.lazy()
export default NotFoundPage
