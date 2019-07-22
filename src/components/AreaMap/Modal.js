import React from "react"
import { Html } from "../utils"

const Modal = props => {
  const { content, closeModal } = props
  return (
    <div className="MapModal">
      <div className="MapModal__backdrop" onClick={closeModal} />
      <div className="MapModal__container">
        <header className="MapModal__header">
          <h2 className="MapModal__title">
            <span>{content.title.rendered}</span>
          </h2>
          <button
            className="MapModal__button MapModal__button--close"
            onClick={closeModal}
          >
            Lukk
          </button>
        </header>
        <div className="MapModal__content">
          <Html content={content.content.rendered} />
        </div>
      </div>
    </div>
  )
}

export default Modal
