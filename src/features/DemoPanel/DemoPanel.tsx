import { ColorDemo } from "./ColorDemo";
import { EStep } from "../../constant";
import { Fade } from "@material-ui/core";
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
            <Fade in={activeStep === EStep.COLOR} unmountOnExit mountOnEnter>
                <div>
                    <ColorDemo />
                </div>
            </Fade>
        </div>
    );
};
