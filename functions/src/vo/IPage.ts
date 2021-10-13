import IMovie from './IMovie';

export default interface IPage {
    page: number,
    movies: Array<IMovie>,
    pages: number,
    results: number
}
