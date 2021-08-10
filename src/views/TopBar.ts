import { DisplayContainer } from 'enta';
import Colors from '../theme/Colors';
import Shadows from '../theme/Shadows';

export default class TopBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'DesktopTopBar';
        this.height = 72;
        this.percentWidth = 100;
        this.backgroundColor = Colors.PRIMARY;
        this.zIndex = 2;
        this.addFilter(Shadows.BOX_SHADOW_DOWN_1);
        this.addFilter(Shadows.BOX_SHADOW_DOWN_2);
    }
}
customElements.define('top-bar', TopBar);
