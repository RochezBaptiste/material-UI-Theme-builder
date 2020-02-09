import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Color, Theme } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => ({
    root: (props: {color: Color}) => ({
        backgroundColor: props.color[500],
        cursor: "pointer",
        height: 40,
        margin: theme.spacing(1) / 2,
        width: 40
    })
}));

interface IParams {
    color: Color;
    updateColor(color: Color): void;
}

export const ColorBlock = (props: IParams) => {
    const { color, updateColor } = props;
    const classes = useStyle({ color });

    return (
        <div className={classes.root} onClick={() => updateColor(color)}/>
    );
};
