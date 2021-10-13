import { ApplicationElement, ColumnLayout, IColumnLayout } from 'enta';
import IAltOmFilm from './IAltOmFilm';
import APIMachine from './machines/ApiMachine';
import LayoutMachine from './machines/LayoutMachine';
import NavigationMachine from './machines/NavigationMachine';
import Colors from './theme/Colors';
import LeftNavigation from './views/LeftNavigation';
import MoviesList from './views/MoviesList';
import TopBar from './views/TopBar';

export default class AltOmFilm extends ApplicationElement implements IAltOmFilm {
    public static TAG = 'alt-om-film';
    public constructor() {
        super();
        this.name = AltOmFilm.TAG;
        this.backgroundColor = Colors.PRIMARY_DARK;
    }

    public loadComplete(): void {
        this.addElements([this.topBar, this.leftNavigation, this.moviesList]);
    }

    public mobile(): void {
        if (this.containsElement(this.leftNavigation)) {
            this.removeElement(this.leftNavigation);
        }
        this.moviesList.left = 0;
    }

    public tablet(): void {
        if (!this.containsElement(this.leftNavigation)) {
            this.addElement(this.leftNavigation);
        }
        this.moviesList.left = 184;
    }

    public lapTop(): void {
        if (!this.containsElement(this.leftNavigation)) {
            this.addElement(this.leftNavigation);
        }
        this.moviesList.left = 184;
    }

    public desktop(): void {
        if (!this.containsElement(this.leftNavigation)) {
            this.addElement(this.leftNavigation);
        }
        this.moviesList.left = 184;
    }

    private navigationMachine: NavigationMachine = new NavigationMachine(this);
    private apiMachine: APIMachine = new APIMachine(this);
    private layoutMachine: LayoutMachine = new LayoutMachine(this);

    private topBar: TopBar = new TopBar();

    public leftNavigation: LeftNavigation = new LeftNavigation();

    private _moviesList!: MoviesList;
    private get moviesList(): MoviesList {
        if (!this._moviesList) {
            this._moviesList = new MoviesList();
            this._moviesList.layout = this.moviesListLayout;
        }
        return this._moviesList;
    }

    private moviesListLayout: IColumnLayout = new ColumnLayout(180, 5, 24);
}
customElements.define(AltOmFilm.TAG, AltOmFilm);
