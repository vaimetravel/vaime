import React, { useCallback } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../../img/logo.svg'
import phoneImg from '../../img/phone.svg'
import { View } from '../Base'
import SocialLink from './SocialLink'
import MobileNavigation from './MobileNavigation'

export default ({ navigation, socialLinks, companyName, phoneNumbers, location }) => {
  const onClick = useCallback(() => window.scrollTo(0, 0), [])
  const phone = phoneNumbers && phoneNumbers[0] || null

  return (
    <>
      <Header>
        <LayoutNavigationDesktop>
          <Nav>
            <LogoWrapper to="/" title="Logo" onClick={onClick}>
              <LogoIcon src={logo} alt={companyName} />
            </LogoWrapper>
            {navigation.map(nav => (
              <NavItem key={nav.to} {...nav}>{nav.title}</NavItem>
            ))}
          </Nav>
          <NavSocialList>
            <PhoneNo href={`tel: ${phone}`}><PhoneImg src={phoneImg} alt='telephone' />{phone}</PhoneNo>
            {socialLinks.map(soc => <SocialLink key={soc.type} {...soc} />)}
          </NavSocialList>
        </LayoutNavigationDesktop>
        <LayoutNavigationMobile>
          <LogoWrapper to="/" title="Logo">
            <LogoIcon src={logo} alt={companyName} />
          </LogoWrapper>
        </LayoutNavigationMobile>
      </Header>
      <MobileNavigation navigation={navigation} location={location} />
    </>
  )
}

const PhoneImg = styled.img`
  width: 1.25rem;
  margin-right: .5rem;
`

const PhoneNo = styled.a`
  color: ${p => p.theme.colorWhite};
  font-weight: ${p => p.theme.weightBold};
  font-size: ${p => p.theme.fontBig};
  margin-right: 1rem;
  display: flex;
`

const Header = styled.header`
  display: flex;
  height: 4rem;
  background-color: ${p => p.theme.colorPrimary};
  position: fixed;
  width: 100%;
  border-bottom: 1px solid ${p => p.theme.colorWhite};
  box-shadow: ${p => p.theme.shadowLight};
  z-index: 2;
  ${p => p.theme.mobile`
    position: absolute;
  `}
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

const LogoIcon = styled.img`
  height: 2.5rem;
`

const NavItem = styled(Link)`
  color: ${p => p.theme.colorWhite};
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 1rem;
  line-height: 2.75;
  &:hover {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`

const NavSocialList = styled.div`
  display: flex;
  ${p => p.theme.smallScreen`
    display: none;
  `}
`

const LayoutNavigationDesktop = styled(View)`
  justify-content: space-between;
  align-items: center;
  ${p => p.theme.mobile`
    display: none;
  `}
`

const LayoutNavigationMobile = styled(View)`
  display: none;
  ${p => p.theme.mobile`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

const BurgerIcon = styled.img`
  height: 2.5rem;
`
