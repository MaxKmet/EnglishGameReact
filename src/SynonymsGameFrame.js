import React from 'react';

import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


export default class SynonymsGameFrame extends React.Component  {

  constructor({mainWord, otherWords,classes}) {
    super();

    this.state = {
      mainWord: mainWord,
      otherWords: otherWords,
      classes: classes,
      points: 10,
    };
    
  }
  
  render(){
  return (
    <div className={this.state.classes.root}>
      <div className={this.state.classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
              Find synonym for:
            </Typography>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h6">
              {this.state.mainWord}
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={this.state.classes.section2}>
        <div>
        {this.state.otherWords.map((wordItem) => (
          <Chip key={wordItem[0]} className={this.state.classes.chip} label= {wordItem[0]} />          
        ))}          
        </div>
      </div>
      <div className={this.state.classes.section3}>
        <Button color="primary">Score: {this.state.points}</Button>
      </div>
    </div>
  );
  }
}

