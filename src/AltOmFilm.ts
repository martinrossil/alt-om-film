import { ApplicationElement } from 'enta';

export default class AltOmFilm extends ApplicationElement {
    public constructor() {
        super();
        console.log('AltOmFilm2');
        window.addEventListener('load', () => {
            console.log('App loaded!');
        });
    }
}
customElements.define('alt-om-film', AltOmFilm);
