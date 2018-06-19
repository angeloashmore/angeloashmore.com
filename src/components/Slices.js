import React from 'react'
import invariant from 'invariant'
import PropTypes from 'prop-types'

export default class Slices extends React.PureComponent {
  static propTypes = {
    componentsMap: PropTypes.object,
    data: PropTypes.object,
    page: PropTypes.object,
    slices: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    componentsMap: {},
    data: {},
    page: {},
    slices: [],
  }

  constructor() {
    super()
    this.renderSlice = this.renderSlice.bind(this)
  }

  renderSlice(slice) {
    const { componentsMap, data, page } = this.props
    const sliceType = slice.__typename.replace('Prismic', '')
    const Comp = componentsMap[sliceType]

    invariant(Comp, `Could not find a component for slice type ${sliceType}`)

    return <Comp data={data} key={slice.id} page={page} slice={slice} />
  }

  render() {
    return this.props.slices.map(this.renderSlice)
  }
}
