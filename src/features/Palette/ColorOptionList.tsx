import { ColorOption } from "./ColorOption";
import { IColor } from "../../data/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";

interface IParams {
    colorList: IColor[];
}

const useStyle = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
});

export const ColorOptionList = (props: IParams) => {
    const { colorList } = props;
    const classes = useStyle();

    return (
        <Fragment>
            <Typography variant="h4">Palette</Typography>
            <div className={classes.root}>
                {
                    colorList.map((color: IColor) => <ColorOption key={color.label} color={color}/>)
                }
            </div>
        </Fragment>

    );
};
