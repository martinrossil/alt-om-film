import IMovie from './IMovie';

export default class Movie implements IMovie {
    public id = 0; // id
    public premiere = ''; // release_date
    public title = ''; // title
    public rating = 0; // vote_average
}
