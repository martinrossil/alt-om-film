import { ApplicationElement } from 'enta';

export default class AltOmFilm extends ApplicationElement {
    public static TAG = 'alt-om-film';
    public constructor() {
        super();
        this.name = AltOmFilm.TAG;
        console.log(this.name);
    }
}
customElements.define(AltOmFilm.TAG, AltOmFilm);
