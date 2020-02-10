import { IFont } from "../../data/font";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import { TypographyOption } from "./TypographyOption";
import React, { Fragment } from "react";

const useStyle = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
});

interface IParams {
    fontList: IFont[];
}

export const TypographyOptionList = (props: IParams) => {
    const { fontList } = props;
    const classes = useStyle();

    return (
        <Fragment>
            <Typography variant="h4">Typography</Typography>
            <div className={classes.root}>
                {
                    fontList.map((font) => <TypographyOption key={font.label} font={font}/>)
                }
            </div>
        </Fragment>
    );
};
