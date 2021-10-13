export default class Box extends HTMLElement {
    public static get observedAttributes(): Array<string> {
        return ['min-width', 'height'];
    }

    public constructor() {
        super();
        console.log('Box');
        this.style.flex = '1';
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        console.log(name, oldValue, newValue);
        if (name === 'min-width') {
            this.style.minWidth = newValue;
        }
        if (name === 'height') {
            this.style.height = newValue;
        }
    }
}
customElements.define('b-o-x', Box);
