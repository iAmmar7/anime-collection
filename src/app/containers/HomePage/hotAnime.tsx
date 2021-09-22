import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks';

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
`;

const AnimeItemContainer = styled.div`
  width: 12em;
  height: 16em;
  display: flex;
  flex-direction: column;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 10em;
  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  font-size: 18px;
  color: #000;
  font-weight: 600;
  margin-top: 8px;
`;

function HotAnime() {
  const { animePage } = useAppSelector((state) => state.homePage);

  console.log('state', animePage);

  //   const isEmpty = !animePage || !animePage.Page || !animePage.Page.media.length === 0;

  return (
    <HotAnimeContainer>
      <AnimeItemContainer>Wait On</AnimeItemContainer>
    </HotAnimeContainer>
  );
}

export default HotAnime;
