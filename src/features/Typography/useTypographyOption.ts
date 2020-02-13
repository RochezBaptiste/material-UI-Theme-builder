import { UserThemeContext } from "../../context/themeContext";
import { fontWeightOptionList, IFont, IFontOption } from "../../data/font";
import React, { useContext, useEffect, useState } from "react";

interface IParams {
    font: IFont;
}

const getBackgroundColor = (weight: React.CSSProperties["fontWeight"]) => {
    return fontWeightOptionList.find((font: IFontOption) => font.weight === weight)?.color;
};

export const useTypographyOption = (props: IParams) => {
    const { font: { label } } = props;
    const theme = useContext(UserThemeContext);
    const [backgroundColor, setBackgroundColor] = useState();
    const [selectedFontWeight, setSelectedFontWeight] = useState<React.CSSProperties["fontWeight"]>();
    const [selectedFontSize, setSelectedFontSize] = useState<React.CSSProperties["fontSize"]>();
    const [isOptionPanelOpen, setIsOptionPanelOpen] = useState(false);

    useEffect(() => {
        if (theme.userTheme.typography[label].fontWeight) {
            setSelectedFontWeight(theme.userTheme.typography[label].fontWeight);
        }
        if (theme.userTheme.typography[label].fontSize) {
            // @ts-ignore
            setSelectedFontSize(parseFloat(theme.userTheme.typography[label].fontSize));
        }
    }, [label]);

    useEffect(() => {
        setBackgroundColor(getBackgroundColor(selectedFontWeight));
    }, [selectedFontWeight]);

    const updateFontWeight = (fontWeight: React.CSSProperties["fontWeight"]) => {
        setSelectedFontWeight(fontWeight);
        const updatedVariant = { ...theme.userTheme.typography[label], fontWeight };
        const updatedTypography = { ...theme.userTheme.typography, [label]: updatedVariant };
        theme.setUserTheme({ ...theme.userTheme, typography: updatedTypography });
    };

    const updateFontSize = (fontSize: React.CSSProperties["fontSize"]) => {
        setSelectedFontSize(fontSize);
        const updatedVariant = { ...theme.userTheme.typography[label], fontSize };
        const updatedTypography = { ...theme.userTheme.typography, [label]: updatedVariant };
        theme.setUserTheme({ ...theme.userTheme, typography: updatedTypography });
    };


    return { backgroundColor,
        isOptionPanelOpen,
        selectedFontSize,
        selectedFontWeight,
        setIsOptionPanelOpen,
        updateFontSize,
        updateFontWeight
    };
};
