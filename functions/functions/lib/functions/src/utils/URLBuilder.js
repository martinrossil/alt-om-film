"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getURLFromRequest = void 0;
const SchemaConverter_1 = require("../converters/SchemaConverter");
const DISCOVER = 'https://api.themoviedb.org/3/discover/movie?';
const DANISH = 'language=da-DK&region=DK&watch_region=DK&include_adult=false&';
const KEY = 'api_key=b1873c6876da5e75d4e8531a13a3c7a2';
function getURLFromRequest(request) {
    let url = DISCOVER + DANISH + KEY + '&';
    const queryParameters = new URLSearchParams(request.query);
    url += getProvider(queryParameters);
    url += getGenre(queryParameters);
    url += getSort(queryParameters);
    url += getPage(queryParameters);
    return url;
}
exports.getURLFromRequest = getURLFromRequest;
function getProvider(queryParameters) {
    const provider = queryParameters.get('se');
    if (provider) {
        const providerId = SchemaConverter_1.default.providerNameToId.get(provider.toLowerCase());
        if (providerId) {
            return 'with_watch_providers=' + providerId + '&';
        }
        return '';
    }
    return '';
}
function getGenre(queryParameters) {
    const genre = queryParameters.get('genre');
    if (genre) {
        const genreId = SchemaConverter_1.default.genreNameToId.get(genre.toLowerCase());
        if (genreId) {
            return 'with_genres=' + genreId + '&';
        }
        return '';
    }
    return '';
}
function getSort(queryParameters) {
    const sort = queryParameters.get('sorter');
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
function getPage(queryParameters) {
    const page = queryParameters.get('side');
    if (page) {
        const pageNumber = parseInt(page);
        if (pageNumber > 0) {
            return 'page=' + page;
        }
        return 'page=1';
    }
    return 'page=1';
}
