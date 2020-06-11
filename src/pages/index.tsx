import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <NavBar />
    </Layout>
  )
}

export default IndexPage
