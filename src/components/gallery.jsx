import { size } from 'lodash'
import { useDispatch } from 'react-redux'
import { useEffectOnce } from 'react-use'
import React, { useState, useCallback } from 'react'

import { useShallowSelector, mapDispatchToUseCallback } from '../utils'
import Albums, { ALBUMS_DISPLAY_LIMIT } from './albums'
import Photos from './photos'
import Modal from './modal'

import * as albumsActions from '../actions/album'
import * as photosActions from '../actions/photo'

import './gallery.css'

export const Gallery = () => {
  const dispatch = useDispatch()
  const { listAlbums, listPhotos } = mapDispatchToUseCallback(dispatch, {
    listAlbums: albumsActions.list({ limit: ALBUMS_DISPLAY_LIMIT }),
    listPhotos: photosActions.list()
  })

  const openModal = useCallback(() => setIsOpen(true))
  const closeModal = useCallback(() => setIsOpen(false))

  const [photo, setPhoto] = useState(null)
  const [photos, setPhotos] = useState([])
  const [albumId, setAlbumId] = useState(null)
  const [modalIsOpen, setIsOpen] = useState(false)
  const { albums, photos: allPhotos } = useShallowSelector(
    ({ albums, photos }) => ({
      albums,
      photos
    })
  )

  useEffectOnce(() => {
    listAlbums()
    listPhotos()
  })

  return (
    <React.Fragment>
      <section className="Gallery">
        <div className="Gallery-grid">
          <Albums {...{ albums, albumId, allPhotos, setAlbumId, setPhotos }} />
          <Photos
            {...{
              photos,
              setPhotos,
              isLoading: size(albums) === 0,
              onPhotoClick: photoId => {
                const thisPhoto = photo => photo.id === photoId
                const photo = allPhotos[albumId].find(thisPhoto)
                setPhoto(photo)
                openModal()
              }
            }}
          />
        </div>
      </section>
      <Modal {...{ photo, isOpen: modalIsOpen, close: closeModal }} />
    </React.Fragment>
  )
}

export default React.memo(Gallery)
