import { ColorOption } from "./ColorOption";
import { ColorType } from "../../data/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";

interface IParams {
    list: ColorType[];
}

const useStyle = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
});

export const ColorOptionList = (props: IParams) => {
    const { list } = props;
    const classes = useStyle();

    return (
        <Fragment>
            <Typography variant="h4">Palette</Typography>
            <div className={classes.root}>
                {
                    list.map((label: ColorType) => <ColorOption key={label} title={label}/>)
                }
            </div>
        </Fragment>

    );
};
