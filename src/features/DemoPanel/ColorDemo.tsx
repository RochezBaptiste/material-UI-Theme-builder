import { Alert } from "@material-ui/lab";
import { fade } from "@material-ui/core/styles/colorManipulator";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { Avatar, Button, Card, CardContent, TextField, Theme, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => ({
    alert: {
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    },
    avatar: {
        height: theme.spacing(7),
        marginRight: theme.spacing(2),
        width: theme.spacing(7)
    },
    errorWrapper: {
        backgroundColor: fade(theme.palette.error.main, 0.4),
        padding: theme.spacing(1)
    },
    profile: {
        alignItems: "center",
        display: "flex",
        marginBottom: theme.spacing(3)
    },
    profileButton: {
        "& > * ": {
            margin: theme.spacing(0, 1),
            textTransform: "capitalize"
        },
        textAlign: "center"
    },
    textField: {
        "& > * ": {
            margin: theme.spacing(0, 1)
        },
        margin: theme.spacing(2, 0)
    },
    warningIcon: {
        color: theme.palette.warning.main
    },
    warningWrapper: {
        backgroundColor: fade(theme.palette.warning.main, 0.4),
        padding: theme.spacing(1)
    }
}));

export const ColorDemo = () => {
    const classes = useStyle();

    return (
        <div>
            <Card elevation={0}>
                <CardContent>
                    <div className={classes.profile}>
                        <Avatar
                            alt="demo user avatar"
                            className={classes.avatar}
                            src="https://randomuser.me/api/portraits/women/57.jpg"
                        />
                        <div>
                            <Typography variant="body1">Anna Black</Typography>
                            <Typography variant="body2" color="textSecondary">Sr. Customer Manager</Typography>
                        </div>
                    </div>
                    <div className={classes.profileButton}>
                        <Button variant="contained" color="primary">View profile</Button>
                        <Button variant="contained" color="secondary">Change status</Button>
                    </div>
                </CardContent>
            </Card>
            <div className={classes.textField}>
                <TextField label="Full name" defaultValue="Anna Black" variant="outlined"/>
                <TextField
                    error
                    type="password"
                    label="Password"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="outlined"
                />
            </div>
            <div className={classes.alert}>
                <Alert severity="error">This is an error alert — check it out!</Alert>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                <Alert severity="info">This is an info alert — check it out!</Alert>
                <Alert severity="success">This is a success alert — check it out!</Alert>
            </div>
        </div>
    );
};
