import { Color } from "@material-ui/core";
import { IColor } from "../../data/colors";
import { UserThemeContext } from "../../context/themeContext";
import { useContext, useEffect, useState } from "react";

interface IParams {
    color: IColor;
    setError(name: string, type: string, message?: string): void;
}

export const useColorOption = (props: IParams) => {
    const { color: { label }, setError } = props;
    const theme = useContext(UserThemeContext);

    const [backgroundColor, setBackgroundColor] = useState<string | undefined>();
    const [isColorPanelOpen, setIsColorPanelOpen] = useState(false);

    useEffect(() => {
        if (theme.userTheme.palette[label].main) {
            setBackgroundColor(theme.userTheme.palette[label].main);
        }
    }, [label]);

    const updateColor = (color: Color) => {
        setBackgroundColor(color[500]);
        const updatedColor = { ...theme.userTheme.palette, [label]: { main: color[500] } };
        theme.setUserTheme({ ...theme.userTheme, palette: updatedColor });
        setIsColorPanelOpen(false);
    };
    const updateHexColor = (color: string) => {
        const updatedColor = { ...theme.userTheme.palette, [label]: { main: color } };
        theme.setUserTheme({ ...theme.userTheme, palette: updatedColor });
    };

    const onSubmit = (data: {hexColor: string}) => {
        if (data.hexColor.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/igm)) {
            setBackgroundColor(data.hexColor);
            updateHexColor(data.hexColor);
            setIsColorPanelOpen(false);
        } else {
            setError("customColor", "notMatch", "Please enter an hex code");
        }
    };

    return { backgroundColor, isColorPanelOpen, onSubmit, setIsColorPanelOpen, updateColor };
};
