export default class PropertyChangeEvent extends Event {
    public static CHANGED = 'changed';
    public constructor() {
        super(PropertyChangeEvent.CHANGED);
    }
}
