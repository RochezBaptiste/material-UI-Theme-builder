import { ColorOptionList } from "./features/Palette/ColorOptionList";
import { colors } from "./data/colors";
import { DemoPanel } from "./features/DemoPanel/DemoPanel";
import { EStep } from "./constant";
import { mainTheme } from "./style/theme";
import { Stepper } from "./features/Stepper/Stepper";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { UserThemeContext } from "./context/themeContext";
import { createMuiTheme, makeStyles, responsiveFontSizes, Theme, ThemeProvider } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./style/index.scss";

export const useStyle = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: "#262a42",
        minHeight: "100vh"
    },
    leftPanel: {
        color: theme.palette.common.white,
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(19)
    },
    rightPanel: {
        backgroundColor: theme.palette.common.white,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        minHeight: "100vh",
        padding: theme.spacing(5)
    }
}));

const App = () => {
    const classes = useStyle();
    const [activeStep, setActiveStep] = useState<EStep>(EStep.COLOR);
    const [userTheme, setUserTheme] = useState<ThemeOptions>({});

    return (
        <ThemeProvider theme={mainTheme}>
            <UserThemeContext.Provider value={{ setUserTheme, userTheme }}>
                <div className={classes.content}>
                    <Grid container>
                        <Grid item md={6} className={classes.leftPanel}>
                            <Typography variant="h2">Hi</Typography>
                            <Typography variant="body1" color="textSecondary">
                            Start to create your own theme
                            </Typography>
                            <ColorOptionList list={colors} />
                            <Stepper activeStep={activeStep} setActiveStep={setActiveStep}/>
                        </Grid>
                        <Grid item md={6} className={classes.rightPanel}>
                            <ThemeProvider theme={responsiveFontSizes(createMuiTheme(userTheme))}>
                                <DemoPanel activeStep={activeStep} />
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </div>
            </UserThemeContext.Provider>
        </ThemeProvider>
    );
};

export default App;
