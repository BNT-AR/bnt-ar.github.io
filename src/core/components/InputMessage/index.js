import styled from 'styled-components'

const Message = styled.div`
  font-size: 11px;
  line-height: 11px;
  color: ${props => props.theme.form.failureColor};
`

export default Message
