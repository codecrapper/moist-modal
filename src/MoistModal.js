import React from 'react'
import PropTypes from 'prop-types'
import './MoistModal.css'

export default function MoistModal({ Header, Content, CloseButton, IsOpen, Close, StylingOverlay, Styling }) {
  
  // WHY DOESNT THIS WORK
  // const closeModal = () => {
  //   IsOpen = false
  // }

  return (
    <div className="modal-container">
      {
        IsOpen && (
          <div>
              <div className="overlay-style" onClick={Close} style={StylingOverlay}></div>
              <div className="modal-wrapper" style={Styling}>
                  <div className="modal-header">
                      <h3 className="modal-title">{Header}</h3>
                      <span className="close-modal-x" onClick={Close}>x</span>
                  </div>
                  <hr />
                  <div className="modal-content">
                      <div className="modal-body">
                          <p>{Content}</p>
                      </div>
                      <div className="modal-footer">
                          <button className="close-modal-button" onClick={Close}>{CloseButton}</button>
                      </div>
                  </div>
              </div>
          </div>
        )
      }
    </div>
  )
}

MoistModal.propTypes = {
  IsOpen: PropTypes.bool,
  Header: PropTypes.string,
  Content: PropTypes.string,
  CloseButton: PropTypes.string,
  Close: PropTypes.func,
  StylingOverlay: PropTypes.object,
  Styling: PropTypes.object
}

MoistModal.defaultProps = {
  IsOpen: true,
  Header: "TITLE: 💩 Denny an cuc 💩",
  Content: "But we're not there yet, so we don't need to worry about it. In life you need colors. If what you're doing doesn't make you happy - you're doing the wrong thing. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. No worries. No cares. Just float and wait for the wind to blow you around. We'll throw some old gray clouds in here just sneaking around and having fun.",
  CloseButton: "Close Modal",
  Close: () => {}
}