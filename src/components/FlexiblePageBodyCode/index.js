import React from 'react'
import PropTypes from 'prop-types'
import MaxWidth from '../MaxWidth'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import { javascript, yaml } from 'react-syntax-highlighter/languages/prism'
import { duotoneSea as style } from 'react-syntax-highlighter/styles/prism'
import './index.module.css'

registerLanguage('javascript', javascript)
registerLanguage('yaml', yaml)

const FlexiblePageBodyCode = ({ slice }) => (
  <section styleName="container">
    <MaxWidth size="medium">
      <div styleName="code">
        <SyntaxHighlighter language={slice.primary.language} style={style} showLineNumbers={true}>
          {slice.primary.code.text}
        </SyntaxHighlighter>
      </div>
    </MaxWidth>
  </section>
)

export default FlexiblePageBodyCode

export const fragment = graphql`
  fragment FlexiblePageBodyCode on PrismicFlexiblePage {
    data {
      body {
        ... on PrismicFlexiblePageBodyCode {
          id
          primary {
            language
            code {
              text
            }
          }
        }
      }
    }
  }
`
