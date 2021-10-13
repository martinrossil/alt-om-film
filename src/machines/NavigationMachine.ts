import { IState, Machine, State } from 'enta';
import IAltOmFilm from '../IAltOmFilm';
import Model from '../model/Model';
import { getAnchorFromEventTarget, getLeftNavigationIndexFromLocationPath } from '../route/RouteUtil';
import IProviderItem from '../vo/IProviderItem';
import { MachineEvents } from './MachineEvents';

export default class NavigationMachine extends Machine<IAltOmFilm> {
    public constructor(host: IAltOmFilm) {
        super(host);
        this.initial.addTransition(MachineEvents.LOAD, this.loadComplete);
        this.initial.addTransition(MachineEvents.POP_STATE, this.poppedState);
        this.initial.addTransition(MachineEvents.CLICK, this.clickedState);
        window.addEventListener(MachineEvents.LOAD, this.send, { once: true });
        window.addEventListener(MachineEvents.CLICK, this.send);
        window.addEventListener(MachineEvents.POP_STATE, this.send);
        host.addEventListener(MachineEvents.URL_CHANGED, this.send);
    }

    private _loadComplete!: IState;
    private get loadComplete(): IState {
        if (!this._loadComplete) {
            this._loadComplete = new State('LoadComplete');
            this._loadComplete.on = this.onLoadComplete.bind(this);
            this._loadComplete.next = this.initial;
        }
        return this._loadComplete;
    }

    private _clickedState!: IState;
    private get clickedState(): IState {
        if (!this._clickedState) {
            this._clickedState = new State('ClickedState');
            this._clickedState.on = this.onClickedState.bind(this);
            this._clickedState.next = this.initial;
        }
        return this._clickedState;
    }

    private _poppedState!: IState;
    private get poppedState(): IState {
        if (!this._poppedState) {
            this._poppedState = new State('Popped');
            this._poppedState.on = this.onPoppedState.bind(this);
            this._poppedState.next = this.initial;
        }
        return this._poppedState;
    }

    private onClickedState(e: Event) {
        const anchor: HTMLAnchorElement | null = getAnchorFromEventTarget(e.target);
        if (anchor) {
            e.preventDefault();
            if (location.pathname !== anchor.pathname) {
                const path = anchor.pathname;
                history.pushState(null, '', path);
                const index = getLeftNavigationIndexFromLocationPath();
                this.updateDocumentTitle(index);
                this.host.dispatch(MachineEvents.URL_CHANGED, location.pathname, false);
            }
        }
    }

    private onPoppedState(): void {
        const index = getLeftNavigationIndexFromLocationPath();
        this.host.leftNavigation.selectedIndex = index;
        this.updateDocumentTitle(index);
        this.host.dispatch(MachineEvents.URL_CHANGED, location.pathname, false);
    }

    private onLoadComplete(): void {
        const index = getLeftNavigationIndexFromLocationPath();
        this.host.leftNavigation.selectedIndex = index;
        this.updateDocumentTitle(index);
        this.host.dispatch(MachineEvents.URL_CHANGED, location.pathname, false);
    }

    private updateDocumentTitle(index: number): void {
        const providerItem: IProviderItem | null = Model.providerItems.getItemAt(index);
        if (providerItem) {
            document.title = providerItem.label;
        }
    }
}
