import {createTheme} from "@mui/material";

export const muiTheme = createTheme(
    {
        palette:
            {
                primary:
                    {
                        main: "#1e5b8c"
                    },
                secondary:
                    {
                        main: "#b2f3fd"
                    }
            },
        typography:
            {
                allVariants:
                    {
                        fontFamily: "Ariel",
                        textTransform: "none"
                    }
            },

        components: {}
    }
);