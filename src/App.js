import React, {Fragment} from 'react';
//Material-UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// Notes Components
import NotesForm from './NotesForm';
import NotesList from './NotesList';
import Home from './Home';
// React Router
import { Link, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      notes: []
    }
  }

  updateValue = e => {
    this.setState({
      [e.target.name]: e.target.value
      
    })
  };

  saveNote = () => {
    console.log(this.state)
    if (this.state.title !== '' && this.state.description !== '' ) {
    this.setState({
      title: '',
      description: '',
      notes: [...this.state.notes, {
        id: Date.now(),
        title: this.state.title,
        description: this.state.description
      }]
    });
  }
  };

  render (){
    console.log(this.state)
    return (
      <Fragment>
        <Typography align='center' variant='h2' gutterBottom>
          Hola React-Notes!
        </Typography>
  
        <Grid container justify='center' spacing={2}>
          <Grid item xs={4}>
            <NotesList notes={this.state.notes} />
          </Grid>
          <Grid item xs={8}>
            <Route exact path='/' component={Home}/>
            {/*
            <NotesForm 
              title={this.state.title} 
              description={this.state.description} 
              updateValue={this.updateValue} 
              saveNote={this.saveNote}/>
            */}
            
            {/*
            <Route exact path='/add' component={NotesForm}/>
            */}
            <Route exact path='/add' render={(props) => <NotesForm 
              title={this.state.title} 
              description={this.state.description} 
              updateValue={this.updateValue} 
              saveNote={this.saveNote}/>} />
          </Grid>
        </Grid>
  
          <Fab color='primary' className='addIcon' component={Link} to='/add'>
            <AddIcon />
          </Fab>
        
      </Fragment>
    );
  }

}

export default App;
