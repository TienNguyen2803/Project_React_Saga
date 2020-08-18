import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    color: {
        primary : '#D32F2F',
        secound : '#FFCDD2',
        success : '#388E3C',
        textColor : '#000000',
        textCorlorDefault:'#000000'
    },
    typography : {
        fontFamily: "Roboto"
    },
    shape : {
        backgroundColor: 'red',
        padding: 20,
        margin: 20
    }
})

export default theme;
