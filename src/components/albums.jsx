import React from 'react'
import { size } from 'lodash'

import { SmallLoader } from './loader'

import './albums.css'

export const ALBUMS_DISPLAY_LIMIT = 30
export const PHOTOS_DISPLAY_LIMIT = 30

export const Albums = ({
  albums,
  albumId,
  allPhotos,
  setPhotos,
  setAlbumId
}) => {
  const areAlbumsLoaded = Boolean(size(albums))
  const arePhotosLoaded = Boolean(size(allPhotos))
  return (
    <section className="Albums">
      <h2>Albums</h2>
      {areAlbumsLoaded && arePhotosLoaded ? (
        <div className="grid">
          {albums.map(album => (
            <div
              key={album.id}
              title={album.title}
              className="Albums-album grid-item"
              onClick={() => {
                if (album.id === albumId) {
                  setAlbumId(null)
                  setPhotos([])
                } else {
                  setAlbumId(album.id)
                  setPhotos(allPhotos[album.id].slice(0, PHOTOS_DISPLAY_LIMIT))
                }
              }}
            >
              <span className="Albums-album-id">{album.id}</span>
              <span className="Albums-album-title line-clamp">
                {album.title}
              </span>
              {arePhotosLoaded && (
                <div className="Albums-album-photos">
                  ({size(allPhotos[album.id])}&nbsp;Photos)
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <SmallLoader />
      )}
    </section>
  )
}

export default React.memo(Albums)
