import { Color } from "@material-ui/core";
import * as muiColors from "@material-ui/core/colors";

export interface IColor {
    label: ColorType;
    initialColor: Color;
}
export const colors: IColor[] = [
    { initialColor: muiColors.indigo, label: "primary" },
    { initialColor: muiColors.pink, label: "secondary" },
    { initialColor: muiColors.green, label: "success" },
    { initialColor: muiColors.orange, label: "warning" },
    { initialColor: muiColors.red, label: "error" },
    { initialColor: muiColors.lightBlue, label: "info" }
];

export type ColorType = "primary" | "secondary" | "success" | "warning" | "error" | "info";
