import { ColorOptionList } from "../Palette/ColorOptionList";
import { colors } from "../../data/colors";
import { EStep } from "../../constant";
import { Fade, Typography } from "@material-ui/core";
import { fonts } from "../../data/font";
import { TypographyOptionList } from "../Typography/TypographyOptionList";
import React, { Fragment } from "react";

interface IParams {
    activeStep: EStep;
}
export const BuildPanel = (props: IParams) => {
    const { activeStep } = props;

    return (
        <Fragment>
            {
                activeStep === EStep.COLOR &&
                <Fade in={activeStep === EStep.COLOR} timeout={{ enter: 500 }}>
                    <div>
                        <ColorOptionList colorList={colors} />
                    </div>
                </Fade>
            }
            {
                activeStep === EStep.TYPOGRAPHY &&
                <Fade in={activeStep === EStep.TYPOGRAPHY} timeout={{ enter: 500 }}>
                    <div>
                        <TypographyOptionList fontList={fonts} />
                    </div>
                </Fade>
            }
            {
                activeStep === EStep.EXPORT &&
                <Fade in={activeStep === EStep.EXPORT} timeout={{ enter: 500 }}>
                    <div>
                        <Typography>Enjoy your custom theme</Typography>
                    </div>
                </Fade>
            }
        </Fragment>
    );
};
