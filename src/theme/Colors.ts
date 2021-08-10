import { Color, IColor } from 'enta';

export default class Colors {
    public static WHITE: IColor = new Color(0, 0, 100);
    public static BLACK: IColor = new Color(0, 0, 0);
    public static PRIMARY_LIGHTEST: IColor = new Color(215, 59, 70);
    public static PRIMARY_LIGHT: IColor = new Color(215, 26, 50);
    public static PRIMARY: IColor = new Color(215, 25, 30);
    public static PRIMARY_DARK: IColor = new Color(215, 25, 27);
    public static PRIMARY_DARKEST: IColor = new Color(215, 26, 18);

    public static SECONDARY_LIGHTEST: IColor = new Color(30, 99, 73);
    public static SECONDARY_LIGHT: IColor = new Color(30, 71, 66);
    public static SECONDARY: IColor = new Color(30, 44, 55);
    public static SECONDARY_DARK: IColor = new Color(30, 36, 37);
    public static SECONDARY_DARKEST: IColor = new Color(30, 36, 18);
}
