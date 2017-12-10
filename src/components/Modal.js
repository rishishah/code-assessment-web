import React from 'react';
import PropTypes from 'prop-types';

// The gray background
const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#F2F4F7',
  padding: 50,
  zIndex: 2
};

// The modal "window"
const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 0
};


const Modal = props => {
  if(!props.show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header className="modal-header">

          <a onClick={ props.onClose } className="modal-close-btn">
            <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                    <g id="Desktop-Copy-2" transform="translate(-971.000000, -205.000000)" stroke="#CBCBCB" strokeWidth="2">
                        <g id="Group-3" transform="translate(972.000000, 206.000000)">
                            <path d="M0.714285714,0.714285714 L29.6582851,29.6582851" id="Line-3"></path>
                            <path d="M28,1 L0,30" id="Line-3"></path>
                        </g>
                    </g>
                </g>
            </svg>
          </a>

        </header>
        { props.children }
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};


// const ModalWrapper = props => {
//   const handleBackgroundClick = e => {
//     if (e.target === e.currentTarget) props.hideModal();
//   };

//   const onOk = () => {
//     props.onOk();
//     props.hideModal();
//   };

//   const okButton = props.showOk
//     ? (
//       <button
//         onClick={onOk}
//         disabled={props.okDisabled}
//       >
//         {props.okText}
//       </button>
//     ) : null;

//   return (
//     <div onClick={handleBackgroundClick}>
//       <header>
//         <h1>{props.title}</h1>

//         <button onClick={props.hideModal}>Close</button>
//       </header>

//       {props.children}

//     </div>
//   );
// };

// ModalWrapper.propTypes = {
//   // props
//   title: PropTypes.string,
//   showOk: PropTypes.bool,
//   okText: PropTypes.string,
//   okDisabled: PropTypes.bool,
//   width: PropTypes.number,
//   style: PropTypes.object,
//   children: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.element,
//     PropTypes.string,
//   ]).isRequired,

//   // methods
//   hideModal: PropTypes.func,
//   onOk: PropTypes.func,
// };

// ModalWrapper.defaultProps = {
//   title: '',
//   showOk: true,
//   okText: 'OK',
//   okDisabled: false,
//   width: 400,
//   onOk: () => {}
// };

export default Modal;