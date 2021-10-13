import * as functions from 'firebase-functions';
import fetch, { FetchError } from 'node-fetch';
import SchemaConverter from '../converters/SchemaConverter';
import { PageSchema } from '../schemas/PageSchema';
import { getURLFromRequest } from '../utils/URLBuilder'
import IPage from '../vo/IPage';
import ITMDB from './ITMDB';

export default class TMDB implements ITMDB {
    public async getMoviesPage(request: functions.https.Request): Promise<[IPage | null, Error | null]> {
        try {
            const url = getURLFromRequest(request);
            const result = await fetch(url);
            const json = await result.json();
            if (json.success === false) {
                return [null, new Error(json.status_message)]
            }
            const schema: PageSchema = json;
            return [SchemaConverter.PageSchemaToIPage(schema), null];
        } catch (error) {
            if (error instanceof FetchError) {
                return [null, new Error('TMDB fetch error')]
            }
            return [null, error];
        }
    }
}
