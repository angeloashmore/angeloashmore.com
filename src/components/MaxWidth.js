import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MaxWidth = ({ children, size, className, ...props }) => (
  <div
    styleName={cx('container', size !== 'full' && `container--${size}`)}
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
    'full',
  ]),
}

MaxWidth.defaultProps = {
  size: 'xlarge',
}

export default MaxWidth
