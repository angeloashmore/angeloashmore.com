import React from 'react'
import PropTypes from 'prop-types'
import './index.module.css'

const MaxWidth = ({ children, size, className, ...props }) => (
  <div
    styleName={`container container--${size}`}
    className={className}
    {...props}
  >
    {children}
  </div>
)

MaxWidth.propTypes = {
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
}

MaxWidth.defaultProps = {
  size: 'xlarge',
}

export default MaxWidth
