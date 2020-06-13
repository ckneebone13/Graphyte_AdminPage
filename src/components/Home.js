import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

function HomePage() {
  return (
    <Wrapper>
      <Typography>Graphyte Admin Home</Typography>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #4f555b;
  padding: 10px;

  span {
    color: #fff;
    font-size: 20px;
  }

  section {
    color: #fff;
  }
`

export default HomePage
