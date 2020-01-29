import cx from 'classnames'
import React, { useState } from 'react'

import { SmallLoader } from './loader'

import { loadImage, useEffectOnceSafe } from '../utils'

import './photo.css'

export const Photo = ({ photo, photos, setPhotos, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffectOnceSafe(
    () => loadImage(photo.thumbnailUrl),
    () => setIsLoaded(true)
  )

  return (
    <div
      title={photo.title}
      className="Photo grid-item"
      onClick={() => onClick(photo.id)}
    >
      <div
        style={{ backgroundImage: `url(${photo.thumbnailUrl})` }}
        className={cx('Photo-image', { 'Photo-image-is-loaded': isLoaded })}
      ></div>
      {isLoaded ? (
        <React.Fragment>
          <div className="Photo-title line-clamp">{photo.title}</div>
          <div
            className="Photo-dismiss"
            onClick={event => {
              event.stopPropagation()
              const otherPhotos = _photo => _photo.id !== photo.id
              setPhotos(photos.filter(otherPhotos))
            }}
          />
        </React.Fragment>
      ) : (
        <SmallLoader />
      )}
    </div>
  )
}

export default React.memo(Photo)
