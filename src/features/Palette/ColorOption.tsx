import { Close } from "@material-ui/icons";
import { ColorBlock } from "../../common/ColorBlock/ColorBlock";
import { IColor } from "../../data/colors";
import { MUICOLORS } from "../../constant";
import React from "react";
import { useColorOption } from "./useColorOption";
import { useForm } from "react-hook-form";
import { Button, Drawer, Fab, Grow, TextField, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const size = 100;

const useStyle = makeStyles((theme: Theme) => ({
    drawer: {
        "& .MuiPaper-root": {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: theme.spacing(4)
        }
    },
    hexColorForm: {
        "& > *": {
            margin: theme.spacing(0, 1)
        },
        alignItems: "center",
        display: "flex",
        margin: "0 auto"
    },
    palette: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: theme.spacing(4)
    },
    resetButton: {
        height: 36,
        position: "absolute",
        right: 3,
        top: 3,
        width: 36
    },
    root: {
        margin: theme.spacing(3, 3),
        position: "relative",
        textAlign: "center",
        width: size
    },
    square: (props: {backgroundColor: string}) => ({
        alignItems: "center",
        backgroundColor: props.backgroundColor ? props.backgroundColor : theme.palette.grey[800],
        borderRadius: 15,
        cursor: "pointer",
        display: "flex",
        height: size,
        justifyContent: "center",
        transition: "all ease 0.6s",
        width: size
    }),
    title: {
        marginTop: theme.spacing(2),
        textTransform: "capitalize"
    }
}));

interface IParams {
    color: IColor;
}

export const ColorOption = (props: IParams) => {
    const { color } = props;
    const { register, handleSubmit, errors, setError, setValue } = useForm<{hexColor: string}>({ mode: "onSubmit" });
    const { backgroundColor,
        isColorPanelOpen,
        onSubmit,
        setIsColorPanelOpen,
        updateColor } = useColorOption({ color, setError });
    const classes = useStyle({ backgroundColor });

    return (
        <div className={classes.root}>
            <Grow in={true} unmountOnExit>
                <Fab aria-label="reset" className={classes.resetButton} onClick={() => updateColor(color.initialColor)}>
                    <Close fontSize="small"/>
                </Fab>
            </Grow>
            <div className={classes.square} onClick={() => setIsColorPanelOpen(!isColorPanelOpen)}>
            </div>
            <Typography variant="body1" className={classes.title}>
                {color.label}
            </Typography>
            <Drawer
                anchor="bottom"
                open={isColorPanelOpen}
                onClose={() => setIsColorPanelOpen(false)}
                className={classes.drawer}
            >
                <form onSubmit={handleSubmit(onSubmit)} className={classes.hexColorForm}>
                    <TextField
                        id="hex-color"
                        name="hexColor"
                        label="Hex color"
                        variant="outlined"
                        size="small"
                        autoComplete="off"
                        inputRef={register}
                        error={!!errors.hexColor}
                        helperText={errors.hexColor?.message}
                        onChange={ (event) => setValue("hexColor", event.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary">Ok</Button>
                </form>
                <div className={classes.palette}>
                    {
                        MUICOLORS.map((colorOption, index) =>
                            <ColorBlock colorOption={colorOption} key={index} updateColor={updateColor} />)
                    }
                </div>
            </Drawer>
        </div>
    );
};
