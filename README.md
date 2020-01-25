#Documentation
React typescript boilerplate for personal project

## Overview
### Quickstart
````
yarn install && yarn run start
````
Now the app is running at `localhost:8080`

### Building
````
yarn run build
````

### Structure
The app/ directory contains your entire application code, including CSS, JavaScript, HTML.

### CSS
Using [Material-UI](https://material-ui.com/) with the [Minimizing Bundle Size](https://material-ui.com/guides/minimizing-bundle-size/)
Theme override can be found in `src/style/theme.ts`

### Eslint 

Basic configuration that extends : 
```
        "eslint:all",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
```

### Testing
There is no test library for the moment 