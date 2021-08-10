import IMovie from './IMovie';
import IPage from './IPage';

export default class Page implements IPage {
    public readonly page = 0;
    public readonly movies: Array<IMovie> = [];
    public readonly pages = 0;
    public readonly results = 0
}
