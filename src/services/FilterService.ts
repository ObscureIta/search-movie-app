import { MovieFilters } from '@/store/MoviesStore';

export class FilterService {
  static applyFiltersToParams(filters: MovieFilters): URLSearchParams {
    const params = new URLSearchParams();

    if (filters.genres) {
      params.set('genres', filters.genres.join(','));
    }
    if (filters.ratingFrom !== undefined) {
      params.set('ratingFrom', filters.ratingFrom.toString());
    }
    if (filters.ratingTo !== undefined) {
      params.set('ratingTo', filters.ratingTo.toString());
    }
    if (filters.yearFrom !== undefined) {
      params.set('yearFrom', filters.yearFrom.toString());
    }
    if (filters.yearTo !== undefined) {
      params.set('yearTo', filters.yearTo.toString());
    }

    return params;
  }

  static parseParamsToFilters(params: URLSearchParams): MovieFilters {
    const filters: MovieFilters = {};

    if (params.has('genres')) {
      filters.genres = params.get('genres')!.split(',');
    }
    if (params.has('ratingFrom')) {
      filters.ratingFrom = parseFloat(params.get('ratingFrom')!);
    }
    if (params.has('ratingTo')) {
      filters.ratingTo = parseFloat(params.get('ratingTo')!);
    }
    if (params.has('yearFrom')) {
      filters.yearFrom = parseInt(params.get('yearFrom')!);
    }
    if (params.has('yearTo')) {
      filters.yearTo = parseInt(params.get('yearTo')!);
    }

    return filters;
  }

  static applyFiltersToApiParams(filters: MovieFilters): Record<string, any> {
    const apiParams: Record<string, any> = {};

    if (filters.genres && filters.genres.length > 0) {
      apiParams.genres = filters.genres.join(',');
    }
    if (filters.ratingFrom !== undefined || filters.ratingTo !== undefined) {
      apiParams.rating = `${filters.ratingFrom || 0}-${filters.ratingTo || 10}`;
    }
    if (filters.yearFrom !== undefined || filters.yearTo !== undefined) {
      apiParams.year = `${filters.yearFrom || 1900}-${filters.yearTo || new Date().getFullYear()}`;
    }

    return apiParams;
  }
}