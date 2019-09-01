import React from 'react'
import styled from 'styled-components'
import facebook from '../../img/fa/facebook.svg'
import instagram from '../../img/fa/instagram.svg'
import youtube from '../../img/fa/youtube.svg'

const icons = {
  facebook,
  instagram,
  youtube
}

const SocialLink = styled.a`
  display: flex;
  align-items: center;
`

const SocialLinkImage = styled.img`
  height: 1.5rem;
  margin-left: 1rem;
`

export default ({type, src}) => (
  <SocialLink href={src} >
    <SocialLinkImage src={icons[type]} alt={type} />
  </SocialLink>
)