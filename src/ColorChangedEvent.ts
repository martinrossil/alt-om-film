import IBoxDTO from './IBoxDTO';

export default class ColorChangedEvent extends Event {
    public static COLOR_CHANGED = 'colorChanged';
    public color: string;
    public boxDTO: IBoxDTO;
    public constructor(boxDTO: IBoxDTO, color: string) {
        super(ColorChangedEvent.COLOR_CHANGED, { bubbles: true });
        this.boxDTO = boxDTO;
        this.color = color;
    }
}
