import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      fontFamily: 'cursive'
    },
    
    palette: {
      primary: purple,
      secondary: {
        main: '#f44336',
      },
    },
  });
  
const cards = [{key:1, title:"Definition game", image:"/definitions.jpg", description:"Can you guess a word by its definition ?"},
   {key:2, title:"Voice game", image:"/talkingwoman.jpg", description:"Can you guess a word by the way it sounds ?"},
   {key:3, title:"Synonyms game",image:"/puzzle.jpg", description:"Can you find a synonym to a given word ?"}];
  
const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    upperContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%',
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    //Synonyms styles
    root: {
        margin: 'auto',
        width: '100%',
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper,
      },
      mainChip: {
        margin: theme.spacing(0.2),
        size: 'large',
      },
      chip: {
        margin: theme.spacing(0.5),
      },
      section1: {
        margin: theme.spacing(3, 2),
      },
      section2: {
        margin: theme.spacing(2),
      },
      section3: {
        margin: theme.spacing(3, 1, 1),
      },
    
  }));
  
export {theme, cards, useStyles};

  