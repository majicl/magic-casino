import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { ActionButton } from '../components'
import { mount, configure } from 'enzyme'

configure({ adapter: new Adapter() })

describe('ActionButton', () => {
    it('should render children', () => {
        const wrapper = mount(
            <ActionButton src="test">
                <div>Play!</div>
            </ActionButton>
        )
        expect(wrapper.html()).toEqual('<a><div>Play!</div></a>')
        wrapper.unmount()
    })

    it('should render title', () => {
        const wrapper = mount(
            <ActionButton title="test">
                <div>Play!</div>
            </ActionButton>
        )
        expect(wrapper.html()).toEqual('<a title="test"><div>Play!</div></a>')
        wrapper.unmount()
    })

    it('should render href', () => {
        const wrapper = mount(
            <ActionButton url="/">
                <div>Play!</div>
            </ActionButton>
        )
        expect(wrapper.html()).toEqual('<a href="/"><div>Play!</div></a>')
        wrapper.unmount()
    })
})
