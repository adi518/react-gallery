import ReactModal from 'react-modal'
import React, { useState } from 'react'

import { LargeLoader } from './loader'

import { loadImage, useEffectSafe } from '../utils'

import './modal.css'

const modalStyles = {
  content: {
    display: 'flex',
    border: 'none',
    background: 'rgba(23, 20, 29, 0.95)'
  },
  overlay: { zIndex: 4, backgroundColor: 'rgba(0, 0, 0, 0.5)' }
}

export const Modal = ({ photo, isOpen, close }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffectSafe(
    async () => photo && loadImage(photo.url, { delay: 1000 }),
    () => photo && setIsLoaded(true),
    { deps: [photo] }
  )

  return (
    <ReactModal
      isOpen={isOpen}
      style={modalStyles}
      contentLabel="Photo Modal"
      onRequestClose={() => {
        close()
        setIsLoaded(false)
      }}
      appElement={document.getElementById('root')}
    >
      <div className="Modal-dismiss" onClick={close} />
      <div className="Modal-photo">
        {isLoaded ? <img src={photo.url} alt={photo.title} /> : <LargeLoader />}
      </div>
    </ReactModal>
  )
}

export default React.memo(Modal)
