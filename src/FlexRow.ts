export default class FlexRow extends HTMLElement {
    public constructor() {
        super();
        this.style.display = 'flex';
        this.style.gap = '24px';
        this.style.flexWrap = 'wrap';
    }
}
customElements.define('flex-row', FlexRow);
