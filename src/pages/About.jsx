import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8vw;
`

const About = () => {
  return (
    <Container>
        About
    </Container>
  )
}

export default About