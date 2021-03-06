import React, { useEffect } from 'react'

import { Container } from './styles'
import { useLocation } from 'react-router-dom'

import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

const GET_ALL_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      user {
        email
      }
    }
  }
`

interface Message {
  id: number
  content: string
  user: {
    email: string
  }
}

type Data = {
  getMessages: Message[]
}

export const Dashboard: React.FC = () => {

  const location = useLocation()

  const { loading, data } = useQuery<Data>(GET_ALL_MESSAGES)

  useEffect(() => {
    if (location.state) {
      console.log(location.state);
    }
  }, [location.state])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <ul>
        {
          data?.getMessages.map((message) => (
            <li key={message.id}>
              <p>{message.content}</p>
              <span>{message.user.email}</span>
            </li>
          ))
        }
      </ul>
    </Container>
  )
}