import { shallow } from 'enzyme'
import React from 'react'
import CardList from './CardList'

it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Jon Snow',
            username: 'JonJon',
            email: 'jon@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})
