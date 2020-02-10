import { Variant } from "@material-ui/core/styles/createTypography";
import { amber, deepOrange, deepPurple, indigo, orange, pink, purple, red, teal } from "@material-ui/core/colors";

export interface IFont {
    label: Variant;
    initialWeight: number;
}
export interface IFontOption {
    color: string;
    weight: number;
}
export const fonts: IFont[] = [
    { initialWeight: 400, label: "body1" },
    { initialWeight: 400, label: "body2" },
    { initialWeight: 300, label: "h1" },
    { initialWeight: 300, label: "h2" },
    { initialWeight: 400, label: "h3" },
    { initialWeight: 400, label: "h4" },
    { initialWeight: 400, label: "h5" },
    { initialWeight: 500, label: "h6" },
    { initialWeight: 400, label: "subtitle1" },
    { initialWeight: 500, label: "subtitle2" },
    { initialWeight: 500, label: "button" },
    { initialWeight: 400, label: "caption" },
    { initialWeight: 400, label: "overline" }
];

export const fontWeightOptionList: IFontOption[] = [
    {
        color: deepPurple[700],
        weight: 100
    },
    {
        color: amber[700],
        weight: 200
    },
    {
        color: teal[700],
        weight: 300
    },
    {
        color: purple[700],
        weight: 400
    },
    {
        color: red[700],
        weight: 500
    },
    {
        color: pink[700],
        weight: 600
    },
    {
        color: indigo[700],
        weight: 700
    },
    {
        color: orange[700],
        weight: 800
    },
    {
        color: deepOrange[700],
        weight: 900
    }
];
