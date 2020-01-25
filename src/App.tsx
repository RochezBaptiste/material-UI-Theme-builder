import { CustomTheme } from "./style/theme";
import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, Theme, ThemeProvider } from "@material-ui/core/styles";
import "./style/index.scss";

export const useStyle = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: theme.palette.grey["50"],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: `calc(100vh - ${theme.spacing(8)}px)`,
        padding: theme.spacing(4),
        textAlign: "center"
    }
}));

const App = () => {
    const classes = useStyle();

    return (
        <ThemeProvider theme={CustomTheme}>
            <div className={classes.content}>
                <Typography variant="h2" color="primary">U47</Typography>
                <Typography variant="h4" color="secondary">Boilerplate</Typography>
            </div>
        </ThemeProvider>
    );
};

export default App;
