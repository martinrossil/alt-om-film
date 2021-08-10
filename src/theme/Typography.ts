import { ITypeFace, TypeFace } from 'enta';

export default class Typography {
    private static _sansSerif = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
    private static _serif = 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';
    private static _mono = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
    public static sansSerif: ITypeFace = new TypeFace(Typography._sansSerif, 0.695, 0.09, -0.063);
    public static serif: ITypeFace = new TypeFace(Typography._serif, 0.695, 0.045, 0.0);
    public static mono: ITypeFace = new TypeFace(Typography._mono, 0.64, 0.06, -0.015);
}
