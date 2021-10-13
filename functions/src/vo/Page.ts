import IMovie from './IMovie';
import IPage from './IPage';

export default class Page implements IPage {
    public page = 0;
    public movies: Array<IMovie> = [];
    public pages = 0;
    public results = 0
}
