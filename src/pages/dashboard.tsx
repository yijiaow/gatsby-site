import React, { useContext, useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import { Router } from '@reach/router' // included with gatsby v2
import styled from 'styled-components'
import { IdentityContext } from '../contexts/auth'

const Button = styled.button`
  padding: 1.5rem 2rem;
`

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, identity: netlifyIdentity } = useContext<any>(IdentityContext)

  useEffect(() => {
    // if (!user && location.pathname !== '/dashboard/login') {
    //   navigate('/dashboard/login')
    //   return
    // }
  })
  return <Component {...rest} />
}

const PublicRoute = props => {
  const { user, identity: netlifyIdentity } = useContext<any>(IdentityContext)
  console.log('publicRoute rendered')
  return <Button onClick={() => netlifyIdentity.open()}>Login</Button>
}

const Login = props => {
  const { identity: netlifyIdentity } = useContext<any>(IdentityContext)

  return <Button onClick={() => netlifyIdentity.open()}>Login</Button>
}
const App = () => {
  const { user, identity: netlifyIdentity } = useContext<any>(IdentityContext)
  console.log(user)

  return user ? (
    <Router>
      <PrivateRoute
        path="/dashboard"
        component={
          <Button onClick={() => netlifyIdentity.logout()}>
            Log Out {user.user_metadata.full_name}
          </Button>
        }
      />
    </Router>
  ) : (
    <Router>
      <PublicRoute path="/dashboard" />
    </Router>
  )
}

export default App
