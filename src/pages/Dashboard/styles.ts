import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  max-width: 950px;

  transform: translate(-50%, -50%);

  ul {
    list-style: none;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    li {
      padding: 17px;
      margin: 9px;
      
      background: #541dffc9;
      border-radius: 6px;

      p {
        margin-bottom: 5px;
      }

      span {
        font-size: .9rem;
      }
    }
  }
`

