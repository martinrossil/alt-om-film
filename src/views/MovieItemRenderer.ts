import { IItemRenderer, ILabelElement, ILinkContainer, ItemRenderer, LinkContainer, VerticalLayout } from 'enta'
import RegularLabel from '../shared/RegularLabel';
import Colors from '../theme/Colors';
import Shadows from '../theme/Shadows';
import IMovie from '../vo/IMovie';

export default class MovieItemRenderer extends ItemRenderer<IMovie> {
    public constructor() {
        super();
        this.name = 'MovieItemRenderer';
        this.clip = 'hidden';
        this.height = 200;
        this.layout = new VerticalLayout(16);
        this.addElements([this.imageContainer, this.titleLabel]);
    }

    private _imageContainer!: ILinkContainer;
    private get imageContainer(): ILinkContainer {
        if (!this._imageContainer) {
            this._imageContainer = new LinkContainer();
            this._imageContainer.cornerSize = 4;
            this._imageContainer.percentWidth = 100;
            this._imageContainer.height = 160;
            this._imageContainer.backgroundColor = Colors.PRIMARY;
            this._imageContainer.addFilter(Shadows.BOX_SHADOW_DOWN_1);
            this._imageContainer.addFilter(Shadows.BOX_SHADOW_DOWN_2);
        }
        return this._imageContainer;
    }

    private _titleLabel!: ILabelElement;
    private get titleLabel(): ILabelElement {
        if (!this._titleLabel) {
            this._titleLabel = new RegularLabel(16, Colors.WHITE);
            this._titleLabel.percentWidth = 100;
        }
        return this._titleLabel;
    }

    public dataChanged(): void {
        if (this.data) {
            this.titleLabel.text = this.data.title;
        }
    }
}
customElements.define('movie-item-renderer', MovieItemRenderer);
