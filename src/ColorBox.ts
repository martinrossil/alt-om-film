import Box from './Box';
import ColorChangedEvent from './ColorChangedEvent';
import IBoxDTO from './IBoxDTO';
import PropertyChangeEvent from './PropertyChangeEvent';

export default class ColorBox extends Box {
    private boxDTO: IBoxDTO;
    public constructor(boxDTO: IBoxDTO) {
        super();
        this.boxDTO = boxDTO;
        this.boxDTO.addEventListener(PropertyChangeEvent.CHANGED, this.boxDTOChanged.bind(this));
        this.updateUI();
    }

    private boxDTOChanged(e: PropertyChangeEvent): void {
        console.log('boxDTOChanged', e.type);
        this.updateUI();
    }

    private updateUI(): void {
        this.style.minWidth = this.boxDTO.minWidth + 'px';
        this.style.height = this.boxDTO.height + 'px';
        this.style.backgroundColor = this.boxDTO.color;
    }

    private clicked(): void {
        this.dispatchEvent(new ColorChangedEvent(this.boxDTO, '#123456'));
    }

    connectedCallback(): void {
        this.addEventListener('click', this.clicked);
    }

    disconnectedCallback(): void {
        this.removeEventListener('click', this.clicked);
    }
}
customElements.define('color-box', ColorBox);
