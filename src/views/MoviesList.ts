import { List } from 'enta';
import Model from '../model/Model';
import IMovie from '../vo/IMovie';
import MovieItemRenderer from './MovieItemRenderer';

export default class MoviesList extends List<IMovie> {
    public constructor() {
        super();
        this.name = 'MoviesList';
        this.top = 72;
        this.padding = 24;
        this.percentWidth = this.percentHeight = 100;
        this.ItemRendererClass = MovieItemRenderer;
        this.dataProvider = Model.movies;
    }
}
customElements.define('movies-list', MoviesList);
