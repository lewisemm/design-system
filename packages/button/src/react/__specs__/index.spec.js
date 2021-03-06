import { mount, shallow } from 'enzyme'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'

import Button from '../index.js'

test('click on button triggered once', () => {
  let callCount = 0
  const onClick = _ => {
    callCount += 1
  }
  const button = shallow(
    <Button onClick={onClick} icon={<Icon id={Icon.ids.check} />}>
      Clicks once
    </Button>
  )
  button.simulate('click')
  expect(callCount).toBe(1)
})

test('click on disabled button with href does not trigger onClick', () => {
  let callCount = 0
  const onClick = _ => {
    callCount += 1
  }
  const button = mount(
    <Button
      disabled
      onClick={onClick}
      href="https://foo.com"
      icon={<Icon id={Icon.ids.check} />}
    >
      Can't Be Clicked
    </Button>
  )
  button.simulate('click')

  expect(callCount).toBe(0)
})

test('forwards a ref', () => {
  const ref = React.createRef()
  mount(<Button ref={ref} />)
  expect(ref.current).not.toBeNull()
})

// TODO: once enzyme supports event propagation, impl test for clicking icon
// https://github.com/airbnb/enzyme/blob/master/docs/future.md
