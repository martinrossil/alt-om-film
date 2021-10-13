import { IDisplayContainer } from 'enta';
import LeftNavigation from './views/LeftNavigation';

export default interface IAltOmFilm extends IDisplayContainer {
    loadComplete(): void;
    mobile(): void;
    tablet(): void;
    lapTop(): void;
    desktop(): void;
    readonly leftNavigation: LeftNavigation;
}
