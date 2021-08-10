import { List, VerticalLayout } from 'enta';
import { MachineEvents } from '../machines/MachineEvents';
import Model from '../model/Model';
import Colors from '../theme/Colors';
import Shadows from '../theme/Shadows';
import IProviderItem from '../vo/IProviderItem';
import LeftNavigationItemRenderer from './LeftNavigationItemRenderer';

export default class LeftNavigation extends List<IProviderItem> {
    public constructor() {
        super();
        this.name = 'ProviderList';
        this.width = 184;
        this.top = 72;
        this.padding = 16;
        this.paddingTop = 24;
        this.percentHeight = 100;
        this.backgroundColor = Colors.PRIMARY;
        this.addFilter(Shadows.BOX_SHADOW_RIGHT_1);
        this.addFilter(Shadows.BOX_SHADOW_RIGHT_2);
        this.ItemRendererClass = LeftNavigationItemRenderer;
        this.layout = new VerticalLayout(8);
        this.dataProvider = Model.providerItems;
        this.zIndex = 1;
    }
}
customElements.define('left-navigation', LeftNavigation);
