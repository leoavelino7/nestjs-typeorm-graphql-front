import React, { useEffect, useState } from 'react'

import { gql } from 'apollo-boost'

import { useMutation } from 'react-apollo'

import { History } from 'history'

import { Container, Content, Input, Button } from './styles'

interface HomeProps {
  history: History
}

export const CREATE_OR_LOGIN_USER = gql`
  mutation($email: String!) {
    createOrLoginUser(data: {
    email: $email
  }) {
    id
  }
}
`

export const Home: React.FC<HomeProps> = ( { history } ) => {
  const [email, setEmail] = useState<string>('')

  const [createOrLoginUser, { data }] = useMutation(CREATE_OR_LOGIN_USER)

  const handleRegister = async (e: React.MouseEvent) => {
    e.preventDefault()

    await createOrLoginUser({ variables: { email } })
    setEmail('')
  }
  
  
  useEffect(() => {
    if(data) {
      const { createOrLoginUser } = data
      const { id } = createOrLoginUser
      
      history.push('/dashboard', {
        id
      })
    }
  }, [data, history])
  
  return (
    <Container>
      <Content>
        <h2>Login</h2>
        <form>
          <Input
            type="text"
            placeholder="Type
            email"
            value={email}  
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button onClick={handleRegister}>
            Login or Register
          </Button>
        </form>
      </Content>
    </Container>
  )
}