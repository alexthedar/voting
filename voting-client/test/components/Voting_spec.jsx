import React from 'react'
import ReactDom from 'react-dom'
import {renderIntoDocument} from 'react-addons-test-utils'
import Voting from '../../src/components/Voting'

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component=renderIntoDocument(
      <Voting pair={["Trainpotting", "28 Days Later"]} />
    )
  })
})
