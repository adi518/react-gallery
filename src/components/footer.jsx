import * as React from 'react'

import pjson from '../../package.json'
import github from '../images/GitHub_Logo_White.png'

export const Footer = () => (
  <footer className="Footer">
    <span className="Footer-credits">
      Made by&nbsp;<a href="https://github.com/adi518">{pjson.author}</a>
      &nbsp;—&nbsp;
      {new Date().getFullYear()}&nbsp;—&nbsp;{pjson.version}
    </span>
    <a className="Footer-github" href={pjson.repository.url}>
      <img src={github} alt="GitHub" />
    </a>
  </footer>
)

export default Footer
