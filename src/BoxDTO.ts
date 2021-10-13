import IBoxDTO from './IBoxDTO';
import EventDispatcher from './EventDispatcher';
import PropertyChangeEvent from './PropertyChangeEvent';

export default class BoxDTO extends EventDispatcher implements IBoxDTO {
    public constructor(minWidth = 200, height = 200, color = 'red') {
        super();
        this._minWidth = minWidth;
        this._height = height;
        this._color = color;
    }

    private _minWidth = 0;
    public set minWidth(value: number) {
        if (this._minWidth === value) {
            return;
        }
        this._minWidth = value;
        this.notifyChanged();
    }

    public get minWidth(): number {
        return this._minWidth;
    }

    private _height = 0;
    public set height(value: number) {
        if (this._height === value) {
            return;
        }
        this._height = value;
        this.notifyChanged();
    }

    public get height(): number {
        return this._height;
    }

    private _color = '';
    public set color(value: string) {
        if (this._color === value) {
            return;
        }
        this._color = value;
        this.notifyChanged();
    }

    public get color(): string {
        return this._color;
    }

    private notifyChanged(): void {
        this.dispatchEvent(new PropertyChangeEvent());
    }
}
