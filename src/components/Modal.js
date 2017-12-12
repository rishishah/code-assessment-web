import React from 'react'
import PropTypes from 'prop-types'

class Modal extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { show } = nextProps
    if (show && document && document.body) {
      document.body.className = document.body.className.replace(/ ?modal-open/, '')
      const existing = document.body.className
      document.body.className = existing + (existing ? ' ' : '') + 'modal-open'
    } else if (document && document.body) {
      document.body.className = document.body.className.replace(/ ?modal-open/, '')
    }
  }

  render () {
    const { show, onClose, children } = this.props
    if(!show) {
      return null
    }

    return (
      <div className="modal-backdrop">
        <div className="modal">
          <header className="modal-header">
            <a onClick={ onClose } className="modal-close-btn">
              <svg id="x-icon" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                      <g transform="translate(-971.000000, -205.000000)" stroke="#CBCBCB" strokeWidth="2">
                          <g transform="translate(972.000000, 206.000000)">
                              <path d="M0.714285714,0.714285714 L29.6582851,29.6582851" id="Line-3"></path>
                              <path d="M28,1 L0,30"></path>
                          </g>
                      </g>
                  </g>
              </svg>
            </a>
          </header>
          { children }
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}

export default Modal
