import React from 'react'
import { size } from 'lodash'

import Photo from './photo'
import { SmallLoader } from './loader'

import './photos.css'

export const Photos = ({ isLoading, photos, setPhotos, onPhotoClick }) => {
  const renderPhotos = () => {
    return size(photos) ? (
      <div className="grid">
        {photos.map(photo => (
          <Photo
            key={photo.id}
            {...{ photo, photos, setPhotos, onClick: onPhotoClick }}
          />
        ))}
      </div>
    ) : (
      <div className="Photos-placeholder">
        <span className="Photos-placeholder-text">SELECT ALBUM</span>
      </div>
    )
  }
  return (
    <section className="Photos">
      <h2>Photos</h2>
      {isLoading ? <SmallLoader /> : renderPhotos()}
    </section>
  )
}

export default React.memo(Photos)
