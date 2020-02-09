import React from "react";
import { Typography } from "@material-ui/core";

export const TypographyDemo = () => {
    const sentence = "Create your own custom theme";

    return (
        <div>
            <Typography variant="h1">h1 Material-UI</Typography>
            <Typography variant="h2" gutterBottom>h2. Theme builder</Typography>
            <Typography variant="h3" gutterBottom>h3. {sentence}</Typography>
            <Typography variant="h4" gutterBottom>h4. {sentence}</Typography>
            <Typography variant="h5" gutterBottom>h5. {sentence}</Typography>
            <Typography variant="h6" gutterBottom>h6. {sentence}</Typography>
            <Typography variant="body1" gutterBottom>body1. {sentence}</Typography>
            <Typography variant="body2" gutterBottom>body2. {sentence}</Typography>
            <Typography variant="subtitle1" gutterBottom>subtitle1. {sentence}</Typography>
            <Typography variant="subtitle2" gutterBottom>subtitle2. {sentence}</Typography>
            <Typography variant="overline" display="block">overline. {sentence}</Typography>
            <Typography variant="button" gutterBottom display="block">button. {sentence}</Typography>
            <Typography variant="caption" display="block">caption. {sentence}</Typography>
        </div>
    );
};
