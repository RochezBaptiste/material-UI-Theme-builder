import { fontWeightColorList } from "../../data/font";
import { lighten } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { useTypographyOption } from "./useTypographyOption";
import { Variant } from "@material-ui/core/styles/createTypography";
import { Chip, Drawer, Theme, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => ({
    chip: (props: { backgroundColor: string}) => ({
        "& .MuiChip-deleteIcon": {
            color: theme.palette.common.white
        },
        "&:focus": {
            backgroundColor: props.backgroundColor ? props.backgroundColor : theme.palette.grey["800"],
        },
        "&:hover": {
            backgroundColor: lighten(props.backgroundColor ? props.backgroundColor : theme.palette.grey["800"], 0.2)
        },
        backgroundColor: props.backgroundColor ? props.backgroundColor : theme.palette.grey["800"],
        color: theme.palette.common.white
    }),
    drawer: {
        "& .MuiPaper-root": {
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            padding: theme.spacing(0, 4)
        }
    },
    fontLabel: {
        textTransform: "capitalize"
    },
    root: {
        margin: theme.spacing(3, 1, 2, 1),
        minWidth: "18%",
        textAlign: "center"
    },
    weightOption: {
        "& :hover": {
            transform: "scale(1.2)",
            transition: "all ease 0.3s"
        },
        cursor: "pointer"
    },
    weightOptionWrapper: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100%",
        justifyContent: "space-between",
        padding: theme.spacing(11, 2)
    }
}));

interface IParams {
    font: Variant;
}

export const TypographyOption = (props: IParams) => {
    const { font } = props;
    const { backgroundColor,
        isWeightOptionOpen,
        removeWeight,
        selectedFontWeight,
        setIsWeightOptionOpen,
        updateWeight } = useTypographyOption({ font });
    const classes = useStyle({ backgroundColor });

    return (
        <div className={classes.root}>
            <Typography className={classes.fontLabel}>{font}</Typography>
            <Chip
                label={selectedFontWeight ? `FW ${selectedFontWeight}` : "Font weight"}
                className={classes.chip}
                onClick={() => setIsWeightOptionOpen(!isWeightOptionOpen)}
                onDelete={ selectedFontWeight ? () => removeWeight() : undefined }
            />
            <Drawer
                anchor="left"
                open={isWeightOptionOpen}
                onClose={() => setIsWeightOptionOpen(false)}
                className={classes.drawer}
            >
                <div className={classes.weightOptionWrapper}>
                    {
                        fontWeightColorList.map((fontWeightColor) =>
                            <div
                                key={fontWeightColor.weight}
                                onClick={() => updateWeight(fontWeightColor.weight)}
                                className={classes.weightOption}
                            >
                                <Typography variant="h5">
                                    {fontWeightColor.weight}
                                </Typography>
                            </div>)
                    }
                </div>
            </Drawer>
        </div>
    );
};
