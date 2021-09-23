import apolloClient from '../../../apollo';
import { GET_ANIME_PAGE } from './queries';
import { GetAnimePage_Page } from './__generated__/GetAnimePage';

class AnimeService {
  async getAnimePage(page: Number, perPage = 5): Promise<GetAnimePage_Page> {
    try {
      const response = await apolloClient.query({
        query: GET_ANIME_PAGE,
        variables: { page, perPage },
      });

      if (!response || !response.data) throw new Error('Cannot get the anime list!');

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AnimeService();
