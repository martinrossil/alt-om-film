import { IEventDispatcher } from 'enta';
import { Provider } from '../types/Provider';

export default interface IProviderItem extends IEventDispatcher {
    href: string;
    label: string;
    provider: Provider;
}
