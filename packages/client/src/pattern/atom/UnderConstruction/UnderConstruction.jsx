import React from 'react'
import { underConstructionDefaultProps, underConstructionPropTypes } from './UnderConstruction.prop'

export function UnderConstruction() {
  return (
    <div>
      Under construction{' '}
      <span role="img" aria-label="emoji">
        🙂
      </span>
    </div>
  )
}

UnderConstruction.defaultProps = underConstructionDefaultProps

UnderConstruction.propTypes = underConstructionPropTypes
