import { ColorDemo } from "./ColorDemo";
import { EStep } from "../../constant";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

interface IParams {
    activeStep: EStep;
}
const useStyle = makeStyles({
    root: {
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center"
    }
});

export const DemoPanel = (props: IParams) => {
    const classes = useStyle();
    const { activeStep } = props;
    return (
        <div className={classes.root}>
            {
                activeStep === EStep.COLOR && <ColorDemo />
            }
        </div>
    );
};
