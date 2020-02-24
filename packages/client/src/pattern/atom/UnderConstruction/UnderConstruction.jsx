import React from 'react'
import { underConstructionDefaultProps, underConstructionPropTypes } from './UnderConstruction.prop'

export function UnderConstruction() {
  return (
    <>
      Under construction{' '}
      <span role="img" aria-label="emoji">
        🙂
      </span>
    </>
  )
}

UnderConstruction.defaultProps = underConstructionDefaultProps

UnderConstruction.propTypes = underConstructionPropTypes
