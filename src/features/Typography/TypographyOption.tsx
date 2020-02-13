import clsx from "clsx";
import { useTypographyOption } from "./useTypographyOption";
import { Chip, Drawer, Slider, TextField, Theme, Typography } from "@material-ui/core";
import { fontWeightOptionList, IFont } from "../../data/font";
import { lighten, makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

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
    fontSizeText: {
        backgroundColor: theme.palette.grey["800"],
        borderRadius: 20,
        cursor: "pointer",
        marginTop: theme.spacing(0.7),
        padding: theme.spacing(0, 1.2),
        width: "fit-content"
    },
    root: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(3, 1, 2, 1),
        minWidth: "18%",
        textAlign: "center"
    },
    weightOption: {
        "& :hover": {
            color: theme.palette.primary,
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
        selectedFontSize,
        selectedFontWeight,
        setIsOptionPanelOpen,
        updateFontSize,
        updateFontWeight } = useTypographyOption({ font });
    const classes = useStyle({ backgroundColor });
    const [panelType, setPanelType] = useState<"fontSize" | "fontWeight">();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) <= 7) {
            updateFontSize(Number(event.target.value));
        }
    };
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
        updateFontSize(newValue);
    };
    const updateWeight = (fontWeight: React.CSSProperties["fontWeight"]) => {
        updateFontWeight(fontWeight);
        setIsOptionPanelOpen(false);
    };
    const openDrawer = (type: "fontSize" | "fontWeight") => {
        setPanelType(type);
        setIsOptionPanelOpen(true);
    };

    return (
        <div className={classes.root}>
            <Typography className={classes.fontLabel}>{font.label}</Typography>
            <Chip
                label={`FW ${selectedFontWeight}`}
                className={classes.chip}
                onClick={() => openDrawer("fontWeight")}
                onDelete={() => updateFontWeight(font.initialWeight)}
            />
            <div className={classes.fontSizeText} onClick={() => openDrawer("fontSize")}>
                <Typography variant="caption">{selectedFontSize} rem</Typography>
            </div>
            <Drawer
                anchor="left"
                open={isOptionPanelOpen}
                onClose={() => setIsOptionPanelOpen(false)}
                className={classes.drawer}
            >
                {panelType === "fontSize" &&

                    <div className={clsx(classes.drawerContent, classes.fontSizeOption)}>
                        <Slider
                            value={typeof selectedFontSize === "number" ? selectedFontSize : 1}
                            onChange={handleSliderChange}
                            aria-labelledby="fontSize-slider"
                            orientation="vertical"
                            valueLabelDisplay="on"
                            max={7}
                            min={0.5}
                            step={0.1}
                        />
                        <TextField
                            id="font-size"
                            name="fontSize"
                            label="Font size"
                            variant="outlined"
                            size="small"
                            type="number"
                            value={selectedFontSize}
                            inputProps={{
                                "aria-labelledby": "fontSize-slider",
                                max: 7,
                                min: 0.5,
                                step: 0.1
                            }}
                            onChange={handleInputChange}
                            helperText="Font size is in rem"
                        />
                    </div>
                }
                { panelType === "fontWeight" &&
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
                }
            </Drawer>
        </div>
    );
};
