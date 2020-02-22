import React from 'react'
import { UnderConstruction } from '../../atom/UnderConstruction'
import { notFoundPageDefaultProps, notFoundPagePropTypes } from './NotFoundPage.prop'

export function NotFoundPage({ className, location }) {
  return (
    <div>
      <UnderConstruction className={className} />
      <div>{location.pathname}</div>
    </div>
  )
}

NotFoundPage.defaultProps = notFoundPageDefaultProps

NotFoundPage.propTypes = notFoundPagePropTypes

// Default export is required to use with React.lazy()
export default NotFoundPage
