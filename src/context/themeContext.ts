import { createContext, Dispatch, SetStateAction } from "react";
import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

interface IThemeContext {
    userTheme: Theme;
    setUserTheme: Dispatch<SetStateAction<ThemeOptions>>;
}

export const UserThemeContext = createContext({} as IThemeContext);
