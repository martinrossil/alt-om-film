import { IState, Machine, State } from 'enta';
import IAltOmFilm from '../IAltOmFilm';
import { MachineEvents } from './MachineEvents';

export default class LayoutMachine extends Machine<IAltOmFilm> {
    public constructor(host: IAltOmFilm) {
        super(host);
        this.initial.addTransition(MachineEvents.LOAD, this.loadComplete);
        window.addEventListener(MachineEvents.LOAD, this.send, { once: true });
        window.addEventListener(MachineEvents.RESIZE, () => {
            this.send(new CustomEvent(this.getEventTypeFromWidth()));
        });
    }

    private getEventTypeFromWidth(): string {
        const width = Math.max(window.innerWidth, document.documentElement.clientWidth);
        if (width > 1366) {
            return MachineEvents.DESKTOP;
        }
        if (width > 1024) {
            return MachineEvents.LAPTOP;
        }
        if (width >= 768) {
            return MachineEvents.TABLET;
        }
        return MachineEvents.MOBILE;
    }

    private _loadComplete!: IState;
    private get loadComplete(): IState {
        if (!this._loadComplete) {
            this._loadComplete = new State('LoadComplete');
            this._loadComplete.addTransition(MachineEvents.MOBILE, this.mobile);
            this._loadComplete.addTransition(MachineEvents.TABLET, this.tablet);
            this._loadComplete.addTransition(MachineEvents.LAPTOP, this.laptop);
            this._loadComplete.addTransition(MachineEvents.DESKTOP, this.desktop);
            this._loadComplete.on = this.onLoadComplete.bind(this);
        }
        return this._loadComplete;
    }

    private onLoadComplete(): void {
        this.host.loadComplete();
        const e = this.getEventTypeFromWidth();
        this.send(new CustomEvent(e));
    }

    private _mobile!: IState;
    private get mobile(): IState {
        if (!this._mobile) {
            this._mobile = new State('Mobile');
            this._mobile.addTransition(MachineEvents.TABLET, this.tablet);
            this._mobile.addTransition(MachineEvents.LAPTOP, this.laptop);
            this._mobile.addTransition(MachineEvents.DESKTOP, this.desktop);
            this._mobile.on = this.host.mobile.bind(this.host);
        }
        return this._mobile;
    }

    private _tablet!: IState;
    private get tablet(): IState {
        if (!this._tablet) {
            this._tablet = new State('Tablet');
            this._tablet.addTransition(MachineEvents.MOBILE, this.mobile);
            this._tablet.addTransition(MachineEvents.LAPTOP, this.laptop);
            this._tablet.addTransition(MachineEvents.DESKTOP, this.desktop);
            this._tablet.on = this.host.tablet.bind(this.host);
        }
        return this._tablet;
    }

    private _laptop!: IState;
    private get laptop(): IState {
        if (!this._laptop) {
            this._laptop = new State('Laptop');
            this._laptop.addTransition(MachineEvents.MOBILE, this.mobile);
            this._laptop.addTransition(MachineEvents.TABLET, this.tablet);
            this._laptop.addTransition(MachineEvents.DESKTOP, this.desktop);
            this._laptop.on = this.host.lapTop.bind(this.host);
        }
        return this._laptop;
    }

    private _desktop!: IState;
    private get desktop(): IState {
        if (!this._desktop) {
            this._desktop = new State('Desktop');
            this._desktop.addTransition(MachineEvents.MOBILE, this.mobile);
            this._desktop.addTransition(MachineEvents.TABLET, this.tablet);
            this._desktop.addTransition(MachineEvents.LAPTOP, this.laptop);
            this._desktop.on = this.host.desktop.bind(this.host);
        }
        return this._desktop;
    }
}
