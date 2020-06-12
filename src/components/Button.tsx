import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`

export default Button
