import { Close } from "@material-ui/icons";
import { ColorBlock } from "../../common/ColorBlock/ColorBlock";
import { ColorType } from "../../data/colors";
import { MUICOLORS } from "../../constant";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { UserThemeContext } from "../../context/themeContext";
import { Color, Drawer, Fab, Icon, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";

const size = 100;

const useStyle = makeStyles((theme: Theme) => ({
    emptyIcon: {
        color: theme.palette.common.white,
        fontSize: "1.7rem"
    },
    palette: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: theme.spacing(1),
        padding: 30
    },
    resetButton: {
        height: 36,
        position: "absolute",
        right: 3,
        top: 3,
        width: 36
    },
    root: {
        margin: theme.spacing(3, 3),
        position: "relative",
        textAlign: "center",
        width: size
    },
    square: (props: {backgroundColor: Color}) => ({
        alignItems: "center",
        backgroundColor: props.backgroundColor ? props.backgroundColor[500] : theme.palette.grey[800],
        borderRadius: 15,
        cursor: "pointer",
        display: "flex",
        height: size,
        justifyContent: "center",
        width: size
    }),
    title: {
        marginTop: theme.spacing(2),
        textTransform: "capitalize"
    }
}));

interface IParams {
    title: ColorType;
}

export const ColorOption = (props: IParams) => {
    const { title } = props;
    const [backgroundColor, setBackgroundColor] = useState<Color>();
    const [isColorPanelOpen, setIsColorPanelOpen] = useState(false);
    const isEmpty = !backgroundColor;
    const classes = useStyle({ backgroundColor });
    const theme = useContext(UserThemeContext);

    const updateColor = (color: Color) => {
        setBackgroundColor(color);
        setIsColorPanelOpen(false);
        const option: PaletteOptions = { [title]: color };
        const newPalette = { ...theme.userTheme.palette, ...option };
        theme.setUserTheme({ ...theme.userTheme, palette: newPalette });
    };

    const removeColor = () => {
        setBackgroundColor(undefined);
        if (theme.userTheme.palette?.[title]) {
            const { [title]: removedColor, ...newPalette } = theme.userTheme.palette;
            theme.setUserTheme({ ...theme.userTheme, palette: newPalette });
        }
    };

    return (
        <div className={classes.root}>
            {
                !isEmpty && (
                    <Fab aria-label="reset" className={classes.resetButton} onClick={removeColor}>
                        <Close fontSize="small"/>
                    </Fab>
                )
            }
            <div className={classes.square} onClick={() => setIsColorPanelOpen(!isColorPanelOpen)}>
                {
                    isEmpty && (
                        <Icon className={classes.emptyIcon}>
                            add
                        </Icon>
                    )
                }
            </div>
            <Typography variant="body1" className={classes.title}>
                {title}
            </Typography>
            <Drawer anchor="bottom" open={isColorPanelOpen} onClose={() => setIsColorPanelOpen(false)}>
                <div className={classes.palette}>
                    {
                        MUICOLORS.map((color, index) =>
                            <ColorBlock color={color} key={index} updateColor={updateColor} />)
                    }
                </div>
            </Drawer>
        </div>
    );
};
