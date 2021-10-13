import { DisplayContainer } from 'enta';
import Colors from '../theme/Colors';
import Shadows from '../theme/Shadows';

export default class SearchField extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'SearchField';
        this.height = 40;
        this.percentWidth = 100;
        this.appendChild(this.input);
        // this.backgroundColor = Colors.PRIMARY_DARK;
        this.cornerSize = 8;
        this.addFilter(Shadows.INNER_SHADOW_1);
        this.addFilter(Shadows.INNER_SHADOW_2);
    }

    protected validate(): void {
        super.validate();
        this._input.style.width = this.actualWidth + 'px';
    }

    private _input!: HTMLInputElement;
    private get input(): HTMLInputElement {
        if (!this._input) {
            this._input = document.createElement('input');
            this._input.style.boxSizing = 'border-box';
            this._input.style.backgroundColor = 'white';
            this._input.style.outline = 'none';
            this._input.style.border = 'none';
            this._input.style.position = 'absolute';
            this._input.style.borderRadius = 8 + 'px';
            // this._input.style.transform = 'translateX(40px)';
            // this._input.style.width = this.width - 64 + 'px';
            this._input.style.height = this.height + 'px';
            /* this._input.style.fontFamily = Typography.TYPEFACE_BOLD.fontFamily;
            this._input.style.fontSize = 18 + 'px';
            this._input.style.color = Colors.BLUE_500.toString();
            this._input.style.fontWeight = '700';
            this._input.setAttribute('aria-label', 'Search') */
        }
        return this._input;
    }
}
customElements.define('search-field', SearchField);
