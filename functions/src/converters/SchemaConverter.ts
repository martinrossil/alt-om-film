import { MovieSchema } from '../schemas/MovieSchema';
import { PageSchema } from '../schemas/PageSchema';
import IMovie from '../vo/IMovie';
import Movie from '../vo/Movie';
import IPage from '../vo/IPage';
import Page from '../vo/Page';

export default class SchemaConverter {
    public static PageSchemaToIPage(schema: PageSchema): IPage {
        const page: IPage = new Page();
        page.page = schema.page;
        page.pages = schema.total_pages;
        page.results = schema.total_results;
        for (const movieSchema of schema.results) {
            const movie: IMovie = SchemaConverter.MovieSchemaToIMovie(movieSchema);
            page.movies.push(movie);
        }
        return page;
    }

    private static dateFormatOptions: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    public static MovieSchemaToIMovie(schema: MovieSchema): IMovie {
        const movie: IMovie = new Movie();
        // movie.genrer = SchemaConverter.GenreIDsToString(schema.genre_ids);
        movie.id = schema.id;
        if (schema.release_date) {
            const releaseDate: Date = new Date(schema.release_date);
            movie.premiere = new Intl.DateTimeFormat('da-DK', this.dateFormatOptions).format(releaseDate);
        } else {
            movie.premiere = 'Ukendt premiere';
        }
        movie.title = schema.title;
        movie.rating = schema.vote_count > 100 ? schema.vote_average : 0;
        return movie;
    }

    public static GenreIDsToString(genreIds: Array<number>): string {
        let genreString = '';
        let genre: string | undefined = '';
        for (const genreId of genreIds) {
            genre = this.genreIdToName.get(genreId);
            if (genre) {
                genreString += genre + ', ';
            }
        }
        if (genreString.length) {
            return genreString.substr(0, genreString.length - 2);
        }
        return genreString;
    }

    private static _genreIdToName: Map<number, string>;
    public static get genreIdToName(): Map<number, string> {
        if (!this._genreIdToName) {
            this._genreIdToName = new Map();
            this._genreIdToName.set(28, 'Action');
            this._genreIdToName.set(12, 'Eventyr');
            this._genreIdToName.set(16, 'Animation');
            this._genreIdToName.set(35, 'Komedie');
            this._genreIdToName.set(80, 'Krimi');
            this._genreIdToName.set(99, 'Dokumentar');
            this._genreIdToName.set(18, 'Drama');
            this._genreIdToName.set(10751, 'Familie');
            this._genreIdToName.set(14, 'Fantasi');
            this._genreIdToName.set(36, 'Historie');
            this._genreIdToName.set(27, 'Gyser');
            this._genreIdToName.set(10402, 'Musik');
            this._genreIdToName.set(9648, 'Mysterie');
            this._genreIdToName.set(10749, 'Romantik');
            this._genreIdToName.set(878, 'Sci-Fi');
            this._genreIdToName.set(10770, 'Tv Film');
            this._genreIdToName.set(53, 'Thriller');
            this._genreIdToName.set(10752, 'Krig');
            this._genreIdToName.set(37, 'Western');
        }
        return this._genreIdToName;
    }

    private static _genreNameToId: Map<string, number>;
    public static get genreNameToId(): Map<string, number> {
        if (!this._genreNameToId) {
            this._genreNameToId = new Map();
            this._genreNameToId.set('action', 28);
            this._genreNameToId.set('eventyr', 12);
            this._genreNameToId.set('animation', 16);
            this._genreNameToId.set('komedie', 35);
            this._genreNameToId.set('krimi', 80);
            this._genreNameToId.set('dokumentar', 99);
            this._genreNameToId.set('drama', 18);
            this._genreNameToId.set('familie', 10751);
            this._genreNameToId.set('fantasi', 14);
            this._genreNameToId.set('historie', 36);
            this._genreNameToId.set('gyser', 27);
            this._genreNameToId.set('musik', 10402);
            this._genreNameToId.set('mysterie', 9648);
            this._genreNameToId.set('romantik', 10749);
            this._genreNameToId.set('sci-fi', 878);
            this._genreNameToId.set('tv-film', 10770);
            this._genreNameToId.set('thriller', 53);
            this._genreNameToId.set('krig', 10752);
            this._genreNameToId.set('western', 37);
        }
        return this._genreNameToId;
    }

    private static _providerNameToId: Map<string, number>;
    public static get providerNameToId(): Map<string, number> {
        if (!this._providerNameToId) {
            this._providerNameToId = new Map();
            this._providerNameToId.set('prime', 119);
            this._providerNameToId.set('itunes', 2);
            this._providerNameToId.set('appletv', 11);
            this._providerNameToId.set('blockbuster', 423);
            this._providerNameToId.set('disney', 337);
            this._providerNameToId.set('hbo', 118);
            this._providerNameToId.set('netflix', 8);
            this._providerNameToId.set('netflixboern', 175);
            this._providerNameToId.set('paramount', 531);
            this._providerNameToId.set('viaplay', 76);
            this._providerNameToId.set('tv2', 383);
        }
        return this._providerNameToId;
    }
}
