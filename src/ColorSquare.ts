export default class ColorSquare extends HTMLElement {
    public static get observedAttributes(): Array<string> {
        return ['min-width', 'min-width'];
    }

    public constructor() {
        super();
        this.style.minWidth = '400px';
        this.style.height = '200px';
        this.style.flex = '1';
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        console.log(name, oldValue, newValue);
        if (name === 'color') {
            this.style.backgroundColor = newValue !== null ? newValue : '';
        }
        if (name === 'min-width') {
            this.style.minWidth = newValue;
        }
    }
}
customElements.define('color-square', ColorSquare);
