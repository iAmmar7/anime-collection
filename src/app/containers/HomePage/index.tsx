import React from 'react';
import styled from 'styled-components';

interface IHomePageProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HomePage(props: IHomePageProps) {
  return (
    <Container>
      <h1>Hot Anime</h1>
    </Container>
  );
}

export default HomePage;
