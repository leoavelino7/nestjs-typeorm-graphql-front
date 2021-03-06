import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  max-width: 950px;

  transform: translate(-50%, -50%);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3rem;
    margin-bottom: 15px;
  }

  > form {
    display: flex;
    flex-direction: column;
  }
`

export const Input = styled.input`
  padding: 9px 54px;
  margin-bottom: 10px;

  font-size: 15px;

  border: none;
  border-radius: 4px;
  box-shadow: -1px 3px 4px 1px #00000030;
`

export const Button = styled.button`
  padding: 10px;

  border: none;
  border-radius: 4px;

  background: #541dff;
  color: #fff;

  font-weight: 800;

  cursor: pointer;

  transition: .2s ease;

  &:hover {
    opacity: 0.8;
  }
`
