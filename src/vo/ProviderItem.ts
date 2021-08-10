import { EventDispatcher } from 'enta';
import { Provider } from '../types/Provider';
import IProviderItem from './IProviderItem';

export default class ProviderItem extends EventDispatcher implements IProviderItem {
    public constructor(href: string, label: string, provider: Provider) {
        super();
        this.href = href
        this.label = label;
        this.provider = provider;
    }

    private _href = '';
    public set href(value: string) {
        if (this._href === value) {
            return;
        }
        this._href = value;
        this.dispatch('hrefChanged', value);
    }

    public get href(): string {
        return this._href;
    }

    public label: string;

    public provider: Provider;
}
