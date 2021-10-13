"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const functions = require("firebase-functions");
/* import ITMDB from './tmdb/ITMDB';
import TMDB from './tmdb/TMDB';

const tmdb: ITMDB = new TMDB(); */
exports.api = functions.https.onRequest(async (request, response) => {
    response.send(request.path);
    const page;
    /* const [page, error] = await tmdb.getMoviesPage(request);
    console.log(page, error);
    if (page) {
        response.set('Cache-Control', 'public, max-age=60, s-maxage=60');
        response.send(page);
    } else {
        response.send({ error: error?.message });
    } */
});
