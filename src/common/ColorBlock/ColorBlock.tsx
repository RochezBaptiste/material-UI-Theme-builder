import React from "react";
import { makeStyles }from "@material-ui/core/styles";
import { Color, Theme } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => ({
    root: (props: {color: Color}) => ({
        backgroundColor: props.color[500],
        height: 40,
        width: 40,
        margin: theme.spacing(1) / 2,
        cursor: "pointer"
    })
}));
interface IParams {
    color: Color,
    updateColor(color: Color): void
}
export const ColorBlock = (props: IParams) => {
    const { color, updateColor } = props;
    const classes = useStyle({color});

    return (
        <div className={classes.root} onClick={() => updateColor(color)}/>
    )
};