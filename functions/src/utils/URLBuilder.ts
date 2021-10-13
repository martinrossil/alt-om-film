import * as functions from 'firebase-functions';
import { Providers } from '../consts/Providers';
// import SchemaConverter from '../converters/SchemaConverter';

const DISCOVER = 'https://api.themoviedb.org/3/discover/movie?';
const DANISH = 'language=da-DK&watch_region=DK&include_adult=false&';
const KEY = 'api_key=b1873c6876da5e75d4e8531a13a3c7a2';

export function getURLFromRequest(request: functions.https.Request): string {
    const path = request.path.substr(5).toLowerCase();
    let url = DISCOVER + DANISH + KEY + '&';
    url += getProviderFromPath(path);
    return url;
}

function getProviderFromPath(path: string): string {
    const watch = 'with_watch_providers=';
    if (path.startsWith('prime')) {
        return watch + Providers.PRIME + '&region=DK';
    }
    if (path.startsWith('itunes')) {
        return watch + Providers.ITUNES + '&region=DK';
    }
    if (path.startsWith('appletv')) {
        return watch + Providers.APPLE_TV; // Apple TV+ will not return anything with region=DK?
    }
    if (path.startsWith('blockbuster')) {
        return watch + Providers.BLOCKBUSTER + '&region=DK';
    }
    if (path.startsWith('disney')) {
        return watch + Providers.DISNEY + '&region=DK';
    }
    if (path.startsWith('hbo')) {
        return watch + Providers.HBO + '&region=DK';
    }
    if (path.startsWith('netflix')) {
        return watch + Providers.NETFLIX + '&region=DK';
    }
    if (path.startsWith('paramount')) {
        return watch + Providers.PARAMOUNT + '&region=DK';
    }
    if (path.startsWith('viaplay')) {
        return watch + Providers.VIAPLAY + '&region=DK';
    }
    if (path.startsWith('tv2')) {
        return watch + Providers.TV2 + '&region=DK';
    }
    return 'region=DK';
}

/* function getProvider(queryParameters: URLSearchParams): string {
    const provider = queryParameters.get('se');
    if (provider) {
        const providerId: number | undefined = SchemaConverter.providerNameToId.get(provider.toLowerCase());
        if (providerId) {
            return 'with_watch_providers=' + providerId + '&'
        }
        return '';
    }
    return '';
}

function getGenre(queryParameters: URLSearchParams): string {
    const genre: string | null = queryParameters.get('genre');
    if (genre) {
        const genreId: number | undefined = SchemaConverter.genreNameToId.get(genre.toLowerCase());
        if (genreId) {
           return 'with_genres=' + genreId + '&';
        }
        return '';
    }
    return '';
}

function getSort(queryParameters: URLSearchParams): string {
    const sort: string | null = queryParameters.get('sorter');
    if (sort) {
        if (sort.toLowerCase() === 'premiere') {
            return 'sort_by=release_date.desc&';
        }
        if (sort.toLowerCase() === 'rating') {
            return 'sort_by=vote_average.desc&vote_count.gte=100&';
        }
        return 'sort_by=popularity.desc&';
    }
    return 'sort_by=popularity.desc&';
}

function getPage(queryParameters: URLSearchParams): string {
    const page: string | null = queryParameters.get('side');
    if (page) {
        const pageNumber: number = parseInt(page);
        if (pageNumber > 0) {
            return 'page=' + page;
        }
        return 'page=1';
    }
    return 'page=1';
} */
