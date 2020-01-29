import React from 'react'

import pjson from '../../package.json'
import octocat from '../images/pusheencat.png'

import './octocat.css'

export const Octocat = () => (
  <a href={pjson.repository.url} target="_blank" rel="noopener noreferrer">
    <img className="Octocat" src={octocat} alt="Octocat" />
  </a>
)

export default Octocat
