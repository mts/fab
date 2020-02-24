import React from 'react'
import { noMatchDefaultProps, noMatchPropTypes } from './NoMatch.prop'

export function NoMatch({ location }) {
  return (
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  )
}

NoMatch.defaultProps = noMatchDefaultProps

NoMatch.propTypes = noMatchPropTypes
