import React, { useContext } from 'react'
import { Link, navigate } from 'gatsby'
import { Router } from '@reach/router'
import styled from 'styled-components'
import { IdentityContext } from '../utils/auth'

const Button = styled.button`
  padding: 1.5rem 2rem;
`

const Dashboard = props => {
  const { user, identity: netlifyIdentity } = useContext<any>(IdentityContext)
  console.log('user: ', user)

  return (
    user && (
      <>
        <h1>Logged In as</h1>
        <h3>{user.user_metadata.full_name}</h3>
        <Button onClick={() => netlifyIdentity.logout()}>Log Out</Button>
      </>
    )
  )
}

const Login = props => {
  const { user, identity: netlifyIdentity } = useContext<any>(IdentityContext)

  return <Button onClick={() => netlifyIdentity.open()}>Login</Button>
}

export default () => {
  const { user, identity: netlifyIdentity } = useContext<any>(IdentityContext)

  if (!user) {
    return (
      <Router>
        <Login path="/dashboard" />
      </Router>
    )
  }
  return (
    <Router>
      <Dashboard path="/dashboard" />
    </Router>
  )
}
