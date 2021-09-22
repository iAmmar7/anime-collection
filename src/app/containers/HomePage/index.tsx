import React, { useEffect, useCallback } from 'react';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import { useAppDispatch } from '../../hooks';
import animeService from '../../services/animeService';
import { setAnimePage } from './slice';
import HotAnime from './hotAnime';

interface IHomePageProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: any) => dispatch(setAnimePage(page)),
});

function HomePage(props: IHomePageProps) {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = useCallback(async () => {
    const animePage = await animeService.getAnimePage(0).catch((err) => console.log(err));
    if (animePage) setAnimePage(animePage);
  }, [setAnimePage]);

  useEffect(() => {
    fetchAnimePage();
  }, [fetchAnimePage]);

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  );
}

export default HomePage;
