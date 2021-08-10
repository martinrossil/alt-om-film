import { ItemRenderer } from 'enta'
import Colors from '../theme/Colors';
import Shadows from '../theme/Shadows';
import IMovie from '../vo/IMovie';

export default class MovieItemRenderer extends ItemRenderer<IMovie> {
    public constructor() {
        super();
        this.name = 'MovieItemRenderer';
        this.cornerSize = 4;
        this.height = 150;
        this.backgroundColor = Colors.PRIMARY;
        this.addFilter(Shadows.BOX_SHADOW_DOWN_1);
        this.addFilter(Shadows.BOX_SHADOW_DOWN_2);
    }
}
customElements.define('movie-item-renderer', MovieItemRenderer);
