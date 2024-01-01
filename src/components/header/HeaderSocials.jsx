import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaTelegram,FaTelegramPlane} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/alshrv" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Alshrv" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://t.me/AbrorAlisherov"><FaTelegramPlane/></a>
        <a href="https://t.me/Alshrv" target='_blank' rel="noreferrer"><FaTelegram/></a>
    </div>
  )
}

export default HeaderSocials