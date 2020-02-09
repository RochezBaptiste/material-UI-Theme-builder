import { EStep } from "../../constant";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import { Button, MobileStepper } from "@material-ui/core";
import { fade, makeStyles, Theme } from "@material-ui/core/styles";

const useStyle = makeStyles((theme: Theme) => ({
    button: {
        "&.Mui-disabled": {
            color: fade(theme.palette.common.white, 0.2)
        },
        color: theme.palette.common.white
    },
    root: {
        backgroundColor: "transparent",
        margin: "auto 0",
        width: "80%"
    }
}));

interface IParams {
    activeStep: EStep;
    setActiveStep(activeStep: EStep): void;
}

export const Stepper = (props: IParams) => {
    const { activeStep, setActiveStep } = props;
    const classes = useStyle();

    return (
        <MobileStepper
            variant="progress"
            steps={EStep.__LENGTH}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
                <Button
                    className={classes.button}
                    size="small"
                    onClick={() => setActiveStep(activeStep + 1)} disabled={activeStep === EStep.EXPORT}
                >
                    Next
                    <KeyboardArrowRight />
                </Button>
            }
            backButton={
                <Button
                    className={classes.button}
                    size="small"
                    onClick={() => setActiveStep(activeStep - 1)}
                    disabled={activeStep === 0}
                >
                    <KeyboardArrowLeft />
                    Back
                </Button>
            }
        />
    );
};
