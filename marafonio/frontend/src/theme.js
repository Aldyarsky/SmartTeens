import { createMuiTheme }  from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    text:{
        primary: '#000',
        secondary:'#fff'
    },
    primary: { 
        main: '#040707',
    },
    secondary:{ main:'#1a2930'},
  },
  
  spacing: 8,

})
export default theme