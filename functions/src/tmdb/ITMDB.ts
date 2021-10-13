import * as functions from 'firebase-functions';
import IPage from '../vo/IPage';

export default interface ITMDB {
    getMoviesPage(request: functions.https.Request): Promise<[IPage | null, Error | null]>;
}
