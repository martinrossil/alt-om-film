import IBoxDTO from './IBoxDTO';
import ColorChangedEvent from './ColorChangedEvent';
import IEventListener from './IEventListener';
import BoxDTO from './BoxDTO';
import { FlexWrap } from './Types';

export default class FlexRowContainer extends HTMLElement {
    public constructor() {
        super();
        this.style.display = 'flex';
        this.style.gap = '24px';
        this.flexWrap = 'wrap';
        window.addEventListener('click', async () => {
            const boxDTOArray: Array<IBoxDTO> = [new BoxDTO(), new BoxDTO(), new BoxDTO(), new BoxDTO()];
            const { default: ColorBox } = await import('./ColorBox');
            for (const boxDTO of boxDTOArray) {
                this.appendChild(new ColorBox(boxDTO));
            }
        });
    }

    private _flexWrap: FlexWrap = 'nowrap';
    public set flexWrap(value: FlexWrap) {
        if (this._flexWrap === value) {
            return;
        }
        this._flexWrap = value;
        this.style.flexWrap = value;
    }

    public get flexWrap(): FlexWrap {
        return this._flexWrap;
    }

    private colorChanged(e: ColorChangedEvent): void {
        console.log(e.color, e.boxDTO);
        const boxDTO: IBoxDTO = e.boxDTO;
        // fetch backend api
        // blue is ok
        boxDTO.color = e.color;
    }

    protected connectedCallback(): void {
        this.addEventListener(ColorChangedEvent.COLOR_CHANGED, this.colorChanged as IEventListener);
    }
}
customElements.define('flex-row-container', FlexRowContainer);
