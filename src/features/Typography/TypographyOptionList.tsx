import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import { TypographyOption } from "./TypographyOption";
import { Variant } from "@material-ui/core/styles/createTypography";
import React, { Fragment } from "react";

const useStyle = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
});

interface IParams {
    fontList: Variant[];
}

export const TypographyOptionList = (props: IParams) => {
    const { fontList } = props;
    const classes = useStyle();

    return (
        <Fragment>
            <Typography variant="h4">Typography</Typography>
            <div className={classes.root}>
                {
                    fontList.map((font) => <TypographyOption key={font} font={font}/>)
                }
            </div>
        </Fragment>
    );
};
