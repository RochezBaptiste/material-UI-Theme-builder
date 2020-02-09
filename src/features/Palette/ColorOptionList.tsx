import { ColorOption } from "./ColorOption";
import { ColorType } from "../../data/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

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
        <div className={classes.root}>
            {
                list.map((label: ColorType) => <ColorOption key={label} title={label}/>)
            }
        </div>
    );
};
