import axios, {type AxiosInstance} from "axios";

export class Api {
  readonly axiosInstance: AxiosInstance;

  constructor(url: string, key: string) {
    this.axiosInstance = axios.create({
      baseURL: url,
      headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
      }
    })
  }

  async getMovies(page: number = 1, limit: number = 50) {
    const response = await this.axiosInstance.get('/v1.4/movie', {
      params: {
        page,
        limit,
        selectFields: ['id', 'name', 'poster', 'year', 'rating', 'genres', 'type', 'description'],
        notNullFields:  ['id', 'name', 'poster.url', 'year', 'description'],
        type: 'movie'
      },
      paramsSerializer: {
        indexes: null
      }
    });
    console.log(response);
    return response.data.docs;
  }

  async getMovieDetails(id: number) {
    const response = await this.axiosInstance.get(`/v1.3/movie/${id}`, {
      params: {
        selectFields: ['description']
      }
    });
    return response.data;
  }
}