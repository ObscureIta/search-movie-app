import { makeAutoObservable, runInAction } from 'mobx';
import { Api } from '../api/Api';

export class MoviesStore {
  movies: any[] = []; // Инициализируем пустым массивом
  isLoading = false;
  api: Api;
  currentPage = 1;
  hasMore = true;

  constructor(api: Api) {
    this.api = api;
    makeAutoObservable(this);
  }

  async loadMovies() {
    if (this.isLoading || !this.hasMore)
      return;

    this.isLoading = true;

    try {
      const data = await this.api.getMovies(this.currentPage);

      runInAction(() => {
        this.movies = [...this.movies, ...data];
        this.currentPage++;
        this.hasMore = data.length > 0;
        this.isLoading = false// Обновляем флаг
      });

    } catch (error) {
      console.error(error);
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}