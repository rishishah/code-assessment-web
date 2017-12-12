import React from 'react'
import { shallow } from 'enzyme'
import Modal from './Modal'

const setup = show => {
  const actions = {
    onClose: jest.fn()
  }

  const component = shallow(
    <Modal show={show} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    closeBtn: component.find('.modal-close-btn')
  }
}

describe('Modal component', () => {

  it('should not render when show toggle is set to false', () => {
    const { component } = setup(false)
    expect(component.get(0)).toBeFalsy()
  })

  it('should call action on button clicks', () => {
    const { closeBtn, actions } = setup(true)
    closeBtn.simulate('click')
    expect(actions.onClose).toBeCalled()  
  })
})