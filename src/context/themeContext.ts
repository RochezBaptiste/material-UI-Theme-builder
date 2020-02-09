import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { createContext, Dispatch, SetStateAction } from "react";
interface IThemeContext {
    userTheme: ThemeOptions;
    setUserTheme: Dispatch<SetStateAction<ThemeOptions>>;
}
export const UserThemeContext = createContext({} as IThemeContext);
