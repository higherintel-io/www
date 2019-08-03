import { variant, fontFamily, fontWeight, letterSpacing } from 'styled-system'

import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'

import Box from './Box'

const Text = styled(Box)(
  fontFamily,
  fontWeight,
  letterSpacing,
  variant({ key: 'textStyle' }),
  props => props.css
)

Text.propTypes = {
  ...Box.propTypes,
  ...propTypes.fontFamily,
  ...propTypes.fontWeight,
  ...propTypes.letterSpacing
}

Text.defaultProps = {
  ...Box.defaultProps,
  as: 'p',
  fontFamily: 'sans',
  m: 0,
  lineHeight: 3,
  fontSize: [1, 2]
}

export default Text
