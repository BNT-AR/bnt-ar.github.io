import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  > a {
    cursor: pointer;
    padding: 5px 10px;

    > img {
      width: 20px;
      height: 20px;
    }
  }
`
