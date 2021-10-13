import { PathElement, ViewBox } from 'enta';
import Colors from '../theme/Colors';
import Icons from '../theme/Icons';

export default class Logo extends PathElement {
    public constructor() {
        super();
        this.name = 'Logo';
        this.pathData = Icons.LOGO;
        this.viewBox = new ViewBox(3, 3, 18, 18);
        this.fillColor = Colors.PRIMARY_LIGHTEST;
        this.size(36, 36);
    }
}
customElements.define('logo-element', Logo);
