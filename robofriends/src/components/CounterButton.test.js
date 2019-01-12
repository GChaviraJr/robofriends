import { shallow } from 'enzyme'
import React from 'react'
import CounterButton from './CounterButton'

it('expect to render CounterButton component', () => {
    const mockColor = 'red'
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
})

// We need to add an id="counter" in the CounterButton.js file
it('correctly increments the counter', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color={mockColor} />)

    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({ count: 1})
})