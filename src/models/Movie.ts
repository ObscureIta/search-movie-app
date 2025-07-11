import type {IMovieData} from "@/types/types";

export class Movie {
    public readonly id: number;
    public readonly title: string;
    public readonly type: string;
    public readonly year: number;
    public readonly posterUrl: string;
    public readonly rating: number | null;
    public readonly genres: string[];
    public description: string | null;

    constructor(data: IMovieData) {
        this.id = data.id;
        this.title = data.name;
        this.type = data.type;
        this.year = data.year;
        this.posterUrl = data.poster?.url || '';
        this.rating = data.rating?.kp ?? null;
        this.genres = data.genres.map(g => g.name);
        this.description = data.description || null;
    }

    get cardData() {
        return {
            id: this.id,
            title: this.title,
            year: this.year,
            rating: this.rating ? this.rating.toFixed(1) : 'N/A',
            posterUrl: this.posterUrl || '/placeholder.jpg',
            mainGenre: this.genres[0] || 'Жанр не указан',
            shortGenres: this.genres.slice(0, 2).join(', ')
        };
    }
}