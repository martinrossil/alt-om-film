import IEventDispatcher from './IEventDispatcher';
import IEventListener from './IEventListener';

export default class EventDispatcher implements IEventDispatcher {
    private listeners: Map<string, IEventListener[] | undefined> = new Map();

    public dispatchEvent(event: Event): boolean {
        const typeListeners: IEventListener[] | undefined = this.listeners.get(event.type);
        if (typeListeners !== undefined) {
            for (const listener of typeListeners) {
                listener(event);
            }
        }
        return true;
    }

    public dispatch<Item>(type: string, payload: Item | undefined = undefined): void {
        const typeListeners: IEventListener[] | undefined = this.listeners.get(type);
        if (typeListeners !== undefined) {
            const customEvent: CustomEvent<Item> = new CustomEvent<Item>(type, { detail: payload });
            for (const listener of typeListeners) {
                listener(customEvent);
            }
        }
    }

    public addEventListener(type: string, listener: IEventListener): void {
        let typeListeners: IEventListener[] | undefined = this.listeners.get(type);
        if (typeListeners === undefined) {
            typeListeners = [];
            this.listeners.set(type, typeListeners);
        }
        typeListeners.push(listener);
    }

    public removeEventListener(type: string, listener: IEventListener): void {
        const typeListeners: IEventListener[] | undefined = this.listeners.get(type);
        if (typeListeners !== undefined) {
            for (const method of typeListeners) {
                if (method === listener) {
                    const index = typeListeners.indexOf(listener);
                    typeListeners.splice(index, 1);
                    break;
                }
            }
        }
    }
}
