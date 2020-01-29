import React from 'react'
import { CircularProgress } from '@material-ui/core'

import './loader.css'

export const Loader = ({ color = 'inherit', ...props }) => (
  <div className="Loader">
    <CircularProgress color={color} {...props} />
  </div>
)

export const SmallLoader = () => <Loader size={20} />
export const MediumLoader = () => <Loader size={40} />
export const LargeLoader = () => <Loader size={60} />

export default Loader
