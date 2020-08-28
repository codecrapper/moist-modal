import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './MoistModal.css'

export default function MoistModal({ modalOpenButton, modalHeader, modalContent, modalCloseButton }) {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="modal-container">
      <button className="open-modal-button" onClick={() => setIsOpen(true)}>{modalOpenButton}</button>

      {/* THE MODAL */}
      {
        isOpen && (
          <div>
              <div className="overlay-style" onClick={onClose}></div>
              <div className="modal-wrapper">
                  <div className="modal-header">
                      <h3 className="modal-title">{modalHeader}</h3>
                      <span className="close-modal-x" onClick={onClose}>x</span>
                  </div>
                  <hr />
                  <div className="modal-content">
                      <div className="modal-body">
                          <p>{modalContent}</p>
                      </div>
                      <div className="modal-footer">
                          <button className="close-modal-button" onClick={onClose}>{modalCloseButton}</button>
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
  modalOpenButton: PropTypes.string,
  modalHeader: PropTypes.string,
  modalContent: PropTypes.string,
  modalCloseButton: PropTypes.string,
}

MoistModal.defaultProps = {
  modalOpenButton: "Click me!",
  modalHeader: "TITLE: 💩 Denny an cuc 💩",
  modalContent: "But we're not there yet, so we don't need to worry about it. In life you need colors. If what you're doing doesn't make you happy - you're doing the wrong thing. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. No worries. No cares. Just float and wait for the wind to blow you around. We'll throw some old gray clouds in here just sneaking around and having fun.",
  modalCloseButton: "Close Modal"
}