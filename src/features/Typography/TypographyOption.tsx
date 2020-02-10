import { fontWeightOptionList, IFont } from "../../data/font";
import React from "react";
import { useTypographyOption } from "./useTypographyOption";
import { Chip, Drawer, Slider, TextField, Theme, Typography } from "@material-ui/core";
import { lighten, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyle = makeStyles((theme: Theme) => ({
    chip: (props: { backgroundColor: string}) => ({
        "& .MuiChip-deleteIcon": {
            color: theme.palette.common.white
        },
        "&:focus": {
            backgroundColor: props.backgroundColor ? props.backgroundColor : theme.palette.grey["800"]
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
    drawerContent: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: theme.spacing(11, 2)
    },
    fontLabel: {
        textTransform: "capitalize"
    },
    fontSizeOption: {
        "& > *": {
            margin: theme.spacing(2, 0)
        },
        alignItems: "center"
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
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
}));

interface IParams {
    font: IFont;
}

export const TypographyOption = (props: IParams) => {
    const { font } = props;

    const { backgroundColor,
        isOptionPanelOpen,
        selectedFontWeight,
        setIsOptionPanelOpen,
        updateFontSize,
        updateFontWeight } = useTypographyOption({ font });
    const classes = useStyle({ backgroundColor });

    const [value, setValue] = React.useState<number | string | Array<number | string>>(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value ? Number(event.target.value) : "");
    };
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
        updateFontSize(newValue.toString(10));
        setValue(newValue);
    };
    const updateWeight = (fontWeight: React.CSSProperties["fontWeight"]) => {
        updateFontWeight(fontWeight);
        setIsOptionPanelOpen(false);
    };

    return (
        <div className={classes.root}>
            <Typography className={classes.fontLabel}>{font.label}</Typography>
            <Chip
                label={`FW ${selectedFontWeight}`}
                className={classes.chip}
                onClick={() => setIsOptionPanelOpen(true)}
                onDelete={() => updateFontWeight(font.initialWeight)}
            />
            <Drawer
                anchor="left"
                open={isOptionPanelOpen}
                onClose={() => setIsOptionPanelOpen(false)}
                className={classes.drawer}
            >
                {/*                <div className={clsx(classes.drawerContent, classes.fontSizeOption)}>
                    <Slider
                        value={typeof value === "number" ? value : 10}
                        onChange={handleSliderChange}
                        aria-labelledby="fontSize-slider"
                        marks
                        orientation="vertical"
                        valueLabelDisplay="auto"
                        min={10}
                    />
                    <TextField
                        id="font-size"
                        name="fontSize"
                        label="Font size"
                        variant="outlined"
                        size="small"
                        type="number"
                        value={value}
                        inputProps={{
                            "aria-labelledby": "fontSize-slider",
                            max: 100,
                            min: 10
                        }}
                        onChange={handleInputChange}
                        helperText="Font size is in px"
                    />
                </div>*/}

                <div className={clsx(classes.drawerContent, classes.weightOptionWrapper)}>
                    {
                        fontWeightOptionList.map((fontWeightOption) =>
                            <div
                                key={fontWeightOption.weight}
                                onClick={() => updateWeight(fontWeightOption.weight)}
                                className={classes.weightOption}
                            >
                                <Typography variant="h5">
                                    {fontWeightOption.weight}
                                </Typography>
                            </div>)
                    }
                </div>
            </Drawer>
        </div>
    );
};
