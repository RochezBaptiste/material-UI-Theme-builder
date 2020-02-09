import { fontWeightColorList } from "../../data/font";
import { UserThemeContext } from "../../context/themeContext";
import React, { useContext, useEffect, useState } from "react";
import { TypographyOptions, Variant } from "@material-ui/core/styles/createTypography";

interface IParams {
    font: Variant;
}

const getBackgroundColor = (weight: React.CSSProperties["fontWeight"]) => {
    return fontWeightColorList.find((font) => font.weight === weight)?.color;
};

export const useTypographyOption = (props: IParams) => {
    const { font } = props;
    const theme = useContext(UserThemeContext);
    const [backgroundColor, setBackgroundColor] = useState();
    const initFontWeight = () => {
        if (theme.userTheme.typography?.[font]?.fontWeight) {
            return theme.userTheme.typography?.[font].fontWeight;
        }
        return undefined;
    };
    const [selectedFontWeight, setSelectedFontWeight] = useState<React.CSSProperties["fontWeight"]>(initFontWeight());
    const [isWeightOptionOpen, setIsWeightOptionOpen] = useState(false);

    useEffect(() => {
        setBackgroundColor(getBackgroundColor(selectedFontWeight));
    }, [selectedFontWeight]);

    const updateWeight = (fontWeight: React.CSSProperties["fontWeight"]) => {
        setSelectedFontWeight(fontWeight);
        const option: TypographyOptions = { [font]: { fontWeight } };
        const newTypography = { ...theme.userTheme.typography, ...option };
        theme.setUserTheme({ ...theme.userTheme, typography: newTypography });
        setIsWeightOptionOpen(false);
    };

    const removeWeight = () => {
        if (theme.userTheme.typography?.[font]) {
            const { [font]: removedColor, ...newTypography } = theme.userTheme.typography;
            theme.setUserTheme({ ...theme.userTheme, typography: newTypography });
            setSelectedFontWeight(undefined);
        }
    };

    return { backgroundColor,
        isWeightOptionOpen,
        removeWeight,
        selectedFontWeight,
        setIsWeightOptionOpen,
        updateWeight };
};
