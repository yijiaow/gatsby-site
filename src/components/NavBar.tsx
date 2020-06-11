import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Bar = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  height: 36px;
`

const NavLink = styled(Link)``

const NavBar = () => (
  <Bar>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/dashboard">Dashboard</NavLink>
  </Bar>
)

export default NavBar
