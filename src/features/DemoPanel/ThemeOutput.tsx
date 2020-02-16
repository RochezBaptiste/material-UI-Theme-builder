import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { UserThemeContext } from "../../context/themeContext";
import React, { useContext } from "react";


export const ThemeOutput = () => {
    const theme = useContext(UserThemeContext);
    console.log(theme.userTheme);
    const outputTheme = `
        palette: {
            primary: {
                main: "${theme.userTheme.palette.primary.main}"
            },
            secondary: {
                main: "${theme.userTheme.palette.secondary.main}"
            },
            error: {
                main: "${theme.userTheme.palette.error.main}"
            },
            warning: {
                main: "${theme.userTheme.palette.warning.main}"
            },
            info: {
                main: "${theme.userTheme.palette.info.main}"
            },
            success: {
                main: "${theme.userTheme.palette.info.main}"
            }
        },
        typography: {
            h1: {
                fontSize: "${theme.userTheme.typography.h1.fontSize}",
                fontWeight: ${theme.userTheme.typography.h1.fontWeight}
            },
            h2: {
                fontSize: "${theme.userTheme.typography.h2.fontSize}",
                fontWeight: ${theme.userTheme.typography.h2.fontWeight}
            },
            h3: {
                fontSize: "${theme.userTheme.typography.h3.fontSize}",
                fontWeight: ${theme.userTheme.typography.h3.fontWeight}
            },
            h4: {
                fontSize: "${theme.userTheme.typography.h4.fontSize}",
                fontWeight: ${theme.userTheme.typography.h4.fontWeight}
            },
            h5: {
                fontSize: "${theme.userTheme.typography.h5.fontSize}",
                fontWeight: ${theme.userTheme.typography.h5.fontWeight}
            },
            h6: {
                fontSize: "${theme.userTheme.typography.h6.fontSize}",
                fontWeight: ${theme.userTheme.typography.h6.fontWeight}
            },
            subtitle1: {
                fontSize: "${theme.userTheme.typography.subtitle1.fontSize}",
                fontWeight: ${theme.userTheme.typography.subtitle1.fontWeight}
            },
            subtitle2: {
                fontSize: "${theme.userTheme.typography.subtitle2.fontSize}",
                fontWeight: ${theme.userTheme.typography.subtitle2.fontWeight}
            },
            button: {
                fontSize: "${theme.userTheme.typography.button.fontSize}",
                fontWeight: ${theme.userTheme.typography.button.fontWeight}
            },
            caption: {
                fontSize: "${theme.userTheme.typography.caption.fontSize}",
                fontWeight: ${theme.userTheme.typography.caption.fontWeight}
            },
            overline: {
                fontSize: "${theme.userTheme.typography.overline.fontSize}",
                fontWeight: ${theme.userTheme.typography.overline.fontWeight}
            }
        }
    `
    return (
        <SyntaxHighlighter language="json" style={docco}>
            {outputTheme}
        </SyntaxHighlighter>
    );
};
