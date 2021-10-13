import { IColor, LabelElement } from 'enta';
import Typography from '../theme/Typography';

export default class RegularLabel extends LabelElement {
    public constructor(fontSize = 14, color: IColor) {
        super();
        this.name = 'RegularLabel';
        this.enabled = false;
        this.typeFace = Typography.sansSerif;
        this.fontSize = fontSize;
        this.textColor = color;
    }
}
customElements.define('regular-label', RegularLabel);
