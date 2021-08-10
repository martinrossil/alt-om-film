import { ItemRenderer, ILinkContainer, LinkContainer, IEventListener } from 'enta';
import RegularLabel from '../shared/RegularLabel';
import Colors from '../theme/Colors';
import IProviderItem from '../vo/IProviderItem';

export default class LeftNavigationItemRenderer extends ItemRenderer<IProviderItem> {
    public constructor() {
        super();
        this.name = 'LeftNavigationItemRenderer';
        this.percentWidth = 100;
        this.height = 36;
        this.cornerSize = 4;
        this.backgroundColor = Colors.PRIMARY;
        this.addElement(this.linkContainer);
    }

    private _linkContainer!: ILinkContainer;
    private get linkContainer(): ILinkContainer {
        if (!this._linkContainer) {
            this._linkContainer = new LinkContainer();
            this._linkContainer.percentWidth = 100;
            this._linkContainer.height = 36;
            this._linkContainer.paddingX = 12;
            this._linkContainer.addElement(this.label);
        }
        return this._linkContainer;
    }

    private _label!: RegularLabel;
    private get label(): RegularLabel {
        if (!this._label) {
            this._label = new RegularLabel();
            this._label.middleOffset = 0;
            this._label.letterSpacing = 0.5;
            this._label.textColor = Colors.WHITE;
        }
        return this._label;
    }

    public initial(): void {
        if (this.selected) {
            this.label.textColor = Colors.PRIMARY_LIGHTEST;
            this.backgroundColor = Colors.PRIMARY_DARK;
        } else {
            this.label.textColor = Colors.WHITE;
            this.backgroundColor = Colors.PRIMARY;
        }
    }

    public hover(): void {
        this.label.textColor = Colors.PRIMARY_LIGHTEST;
        this.backgroundColor = Colors.PRIMARY_DARK;
    }

    public pressed(x: number, y: number): void {
        this.label.textColor = Colors.WHITE;
        this.backgroundColor = Colors.PRIMARY_DARKEST;
    }

    public selectedChanged(): void {
        if (this.selected) {
            this.label.textColor = Colors.PRIMARY_LIGHTEST;
            this.backgroundColor = Colors.PRIMARY_DARK;
        } else {
            this.label.textColor = Colors.WHITE;
            this.backgroundColor = Colors.PRIMARY;
        }
    }

    public dataChanged(): void {
        if (this.data) {
            this.label.text = this.data.label;
            this.linkContainer.href = this.data.href;
            this.data.addEventListener('hrefChanged', this.hrefChanged as IEventListener)
        }
    }

    private hrefChanged(e: CustomEvent<IProviderItem>): void {
        this.linkContainer.href = e.detail.href;
    }
}
customElements.define('left-navigation-item-renderer', LeftNavigationItemRenderer);
