export interface IMovieData {
    id: number;
    name: string;
    type: string;
    year: number;
    poster: {
        url: string;
    };
    rating: {
        kp: number | null;
        imdb?: number | null;
        filmCritics?: number | null;
    };
    genres: {
        name: string;
    }[];
    description?: string;
}