import { createMuiTheme } from "@material-ui/core";

export const customTheme=createMuiTheme({
    palette:{
        primary:{
            main:'#248023'
        },
        secondary:{
            main:'#369c98'
        }
    },
    typography:{
        h5:{
            fontSize:'25px'
        }
    }
})