import { Close } from "@material-ui/icons";
import { ColorBlock } from "../../common/ColorBlock/ColorBlock";
import { ColorType } from "../../data/colors";
import { MUICOLORS } from "../../constant";
import React from "react";
import { useColorOption } from "./useColorOption";
import { useForm } from "react-hook-form";
import { Button, Drawer, Fab, Grow, Icon, TextField, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const size = 100;

const useStyle = makeStyles((theme: Theme) => ({
    customColorForm: {
        "& > *": {
            margin: theme.spacing(0, 1)
        },
        alignItems: "center",
        display: "flex",
        margin: "0 auto"
    },
    drawer: {
        "& .MuiPaper-root": {
            padding: theme.spacing(4)
        }
    },
    emptyIcon: {
        color: theme.palette.common.white,
        fontSize: "1.7rem"
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
    title: ColorType;
}

export const ColorOption = (props: IParams) => {
    const { title } = props;
    const { register, handleSubmit, errors, setError, setValue } = useForm<{customColor: string}>({ mode: "onSubmit" });
    const { backgroundColor,
        isColorPanelOpen,
        onSubmit,
        removeColor,
        setIsColorPanelOpen,
        updateColor } = useColorOption({ setError, title });
    const isEmpty = !backgroundColor;
    const classes = useStyle({ backgroundColor });

    return (
        <div className={classes.root}>
            <Grow in={!isEmpty} unmountOnExit>
                <Fab aria-label="reset" className={classes.resetButton} onClick={removeColor}>
                    <Close fontSize="small"/>
                </Fab>
            </Grow>
            <div className={classes.square} onClick={() => setIsColorPanelOpen(!isColorPanelOpen)}>
                <Grow in={isEmpty} unmountOnExit>
                    <div>
                        <Icon className={classes.emptyIcon}>
                            add
                        </Icon>
                    </div>
                </Grow>
            </div>
            <Typography variant="body1" className={classes.title}>
                {title}
            </Typography>
            <Drawer
                anchor="bottom"
                open={isColorPanelOpen}
                onClose={() => setIsColorPanelOpen(false)}
                className={classes.drawer}
            >
                <form onSubmit={handleSubmit(onSubmit)} className={classes.customColorForm}>
                    <TextField
                        id="custom-color"
                        name="customColor"
                        label="Custom color"
                        variant="outlined"
                        size="small"
                        autoComplete="off"
                        inputRef={register}
                        error={!!errors.customColor}
                        helperText={errors.customColor?.message}
                        onChange={ (event) => setValue("customColor", event.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary">Ok</Button>
                </form>
                <div className={classes.palette}>
                    {
                        MUICOLORS.map((color, index) =>
                            <ColorBlock color={color} key={index} updateColor={updateColor} />)
                    }
                </div>
            </Drawer>
        </div>
    );
};
