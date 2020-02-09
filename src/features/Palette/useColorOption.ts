import { Color } from "@material-ui/core";
import { ColorType } from "../../data/colors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { UserThemeContext } from "../../context/themeContext";
import { useContext, useState } from "react";

interface IParams {
    title: ColorType;
    setError(name: string, type: string, message?: string): void;
}
export const useColorOption = (props: IParams) => {
    const { title, setError } = props;
    const [backgroundColor, setBackgroundColor] = useState<string>();
    const [isColorPanelOpen, setIsColorPanelOpen] = useState(false);
    const theme = useContext(UserThemeContext);

    const updateColor = (color: Color) => {
        setBackgroundColor(color[500]);
        const option: PaletteOptions = { [title]: color };
        const newPalette = { ...theme.userTheme.palette, ...option };
        theme.setUserTheme({ ...theme.userTheme, palette: newPalette });
        setIsColorPanelOpen(false);
    };
    const removeColor = () => {
        setBackgroundColor(undefined);
        if (theme.userTheme.palette?.[title]) {
            const { [title]: removedColor, ...newPalette } = theme.userTheme.palette;
            theme.setUserTheme({ ...theme.userTheme, palette: newPalette });
        }
    };
    const onSubmit = (data: {customColor: string}) => {
        if (data.customColor.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/igm)) {
            setBackgroundColor(data.customColor);
            const option: PaletteOptions = { [title]: { main: data.customColor } };
            const newPalette = { ...theme.userTheme.palette, ...option };
            theme.setUserTheme({ ...theme.userTheme, palette: newPalette });
            setIsColorPanelOpen(false);
        } else {
            setError("customColor", "notMatch", "Please enter an hex code");
        }
    };

    return { backgroundColor, isColorPanelOpen, onSubmit, removeColor, setIsColorPanelOpen, updateColor };
};
