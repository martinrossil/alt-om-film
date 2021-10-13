import IEventDispatcher from './IEventDispatcher';

export default interface IBoxDTO extends IEventDispatcher {
    minWidth: number;
    height: number;
    color: string;
}
