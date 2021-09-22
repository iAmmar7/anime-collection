import React from 'react';
import styled from 'styled-components';
import HomePage from './app/containers/HomePage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
