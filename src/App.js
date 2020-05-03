import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Footer from './Footer';
import TopBar from './TopBar';
import './App.css';
import Album from './Album';
import {useStyles, theme, cards} from './AppStyles'
import { ThemeProvider } from '@material-ui/core/styles';

import SynonymsGameFrame from './SynonymsGameFrame'
import DefinitionsGameFrame from './DefinitionsGameFrame'
import AudioGameFrame from './AudioGameFrame'

const mainWord = "mainWord";
const someDefinition = "A long definition of a difficult term in English"
const otherWords = [["Word1", false],["Word2", true], ["Word3", false], ["Word4", false]];
const sampleAudio = "audioFile";

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
      <CssBaseline />
      <TopBar classes={classes} text="Engames" />

      <main> 
        {/*  Main page    */}
        <div className={classes.upperContent}>
          
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              ENGAMES
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Collection of games for English lovers
            </Typography>
          </Container>
        </div>
        
        <Album classes = {classes} cards = {cards}>
        </Album>
        
        {/*Synonym game page ui*/}
        <SynonymsGameFrame mainWord={mainWord} otherWords={otherWords} classes={classes}></SynonymsGameFrame>
        {/*Definitions game page ui*/}
        <DefinitionsGameFrame definition={someDefinition} words={otherWords} classes={classes}></DefinitionsGameFrame>
        {/*Audio game page ui*/}
        <AudioGameFrame audio = {sampleAudio} correctWord={mainWord} classes={classes}></AudioGameFrame>
      </main>

      <Footer classes={classes} text={"Learn with pleasure!"}/>
      </React.Fragment>
    
    </ThemeProvider>

  );
}

export default App;
