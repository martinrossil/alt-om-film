import Model from '../model/Model';
import IProviderItem from '../vo/IProviderItem';

export function getLeftNavigationIndexFromLocationPath(): number {
    const path: string = location.pathname;
    const providerItems: Array<IProviderItem> = Model.providerItems.source;
    for (const providerItem of providerItems) {
        if (providerItem.href.startsWith(path)) {
            return Model.providerItems.getItemIndex(providerItem);
        }
    }
    return NaN;
}

export function getAnchorFromEventTarget(target: EventTarget | null): HTMLAnchorElement | null {
    if (target instanceof HTMLAnchorElement) {
        return target;
    }
    if (target instanceof HTMLDocument) {
        return null;
    }
    const targetNode: Node = target as Node;
    const parent: Node | null = targetNode.parentNode;
    return getAnchorFromEventTarget(parent);
}
