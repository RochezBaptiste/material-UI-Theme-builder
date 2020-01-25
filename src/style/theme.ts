import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

export const CustomTheme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: indigo[500]
        },
        secondary: {
            main: deepPurple[500]
        }
    }
}));
