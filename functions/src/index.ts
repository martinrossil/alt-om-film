import * as functions from 'firebase-functions';
import ITMDB from './tmdb/ITMDB';
import TMDB from './tmdb/TMDB';

const tmdb: ITMDB = new TMDB();

export const api = functions.https.onRequest(async (request, response): Promise<void> => {
    const [page, error] = await tmdb.getMoviesPage(request);
    console.log(page, error);
    if (page) {
        response.set('Cache-Control', 'public, max-age=60, s-maxage=60');
        response.send(page);
    } else {
        response.send({ error: error?.message });
    }
});
