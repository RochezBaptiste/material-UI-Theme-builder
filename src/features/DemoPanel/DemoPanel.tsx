import { ColorDemo } from "./ColorDemo";
import { EStep } from "../../constant";
import { Fade } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { ThemeOutput } from "./ThemeOutput";
import { TypographyDemo } from "./TypographyDemo";

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
                activeStep === EStep.COLOR &&
                <Fade in={activeStep === EStep.COLOR} timeout={{ enter: 500 }}>
                    <div>
                        <ColorDemo />
                    </div>
                </Fade>
            }
            {
                activeStep === EStep.TYPOGRAPHY &&
                <Fade in={activeStep === EStep.TYPOGRAPHY} timeout={{ enter: 500 }}>
                    <div>
                        <TypographyDemo />
                    </div>
                </Fade>
            }
            {
                activeStep === EStep.EXPORT &&
                <Fade in={activeStep === EStep.EXPORT} timeout={{ enter: 500 }}>
                    <div style={{ width: "100%" }}>
                        <ThemeOutput />
                    </div>
                </Fade>
            }
        </div>
    );
};
