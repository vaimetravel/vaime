import React from 'react'
import styled from 'styled-components'
import useInstagram from '../../hooks/instagram'

export default () => (
  <Wrapper>
    {useInstagram().map(({ href, src }, key) => (
      <Anchor key={href} target="_blank" rel="noopener noreferrer" href={href} style={{ backgroundImage: `url("${src}")` }} aria-label={`instagram link ${key}`} />
    ))}
  </Wrapper >
)

const Wrapper = styled.div`
  width: auto;
  max-width: 100%;
  flex: 1;
  filter: brightness(1.1) contrast(1.1);
  ${p => p.theme.mobile`
    padding-right: 0;
    margin-right: 0;
    max-width: 100%;
    width: 100%;
  `}
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const Anchor = styled.a`
  width: calc(100% / 12);
  height: calc(100vw / 12 - 5px);
  ${p => p.theme.mobile`
    width: 20%;
    height: calc(100vw / 5);
  `}
  border: 1px solid white;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity .15s;
  &:hover {
    opacity: 0.8;
  }
`
