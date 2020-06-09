import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const NavBar = styled.nav`
  width: 100%
  height: 40px;
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <NavBar>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/articles">Articles</NavLink>
      </NavBar>
    </Layout>
  )
}

export default IndexPage
