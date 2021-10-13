import { IEventListener, IState, Machine, State } from 'enta';
import IAltOmFilm from '../IAltOmFilm';
import Model from '../model/Model';
import IMovie from '../vo/IMovie';
import IPage from '../vo/IPage';
import Page from '../vo/Page';
import { MachineEvents } from './MachineEvents';

export default class APIMachine extends Machine<IAltOmFilm> {
    public constructor(host: IAltOmFilm) {
        super(host);
        this.initial.addTransition(MachineEvents.URL_CHANGED, this.loadingPageState);
        host.addEventListener(MachineEvents.URL_CHANGED, this.send);
    }

    private _loadingPageState!: IState;
    private get loadingPageState(): IState {
        if (!this._loadingPageState) {
            this._loadingPageState = new State('LoadingPageState');
            this._loadingPageState.on = this.onLoadingPageState.bind(this) as IEventListener;
            this._loadingPageState.next = this.initial;
        }
        return this._loadingPageState;
    }

    private async onLoadingPageState(): Promise<void> {
        console.log('onLoadingPageState');
        Model.movies.removeAll();
        try {
            const response = await fetch('/api' + location.pathname);
            const page: IPage = await response.json();
            console.log('page', page);
            // Because the closure compiler renames variable names, we need to use ['name'] syntax,
            // so page.movies is kept in the ADVANCED compiler mode.
            Model.movies.addItems(page['movies']);
        } catch (error) {
            console.log(error);
        }
    }
}
