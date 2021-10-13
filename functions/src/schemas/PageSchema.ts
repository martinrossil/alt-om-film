import { MovieSchema } from './MovieSchema';

export type PageSchema = {
    page: number,
    results: Array<MovieSchema>,
    total_pages: number,
    total_results: number
}
