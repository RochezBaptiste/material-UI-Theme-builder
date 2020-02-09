import { ColorOptionList } from "../Palette/ColorOptionList";
import { colors } from "../../data/colors";
import { EStep } from "../../constant";
import { Fade } from "@material-ui/core";
import React from "react";

interface IParams {
    activeStep: EStep;
}
export const BuildPanel = (props: IParams) => {
    const { activeStep } = props;

    return (
        <Fade in={activeStep === EStep.COLOR} unmountOnExit mountOnEnter>
            <div>
                <ColorOptionList list={colors} />
            </div>
        </Fade>
    );
};
