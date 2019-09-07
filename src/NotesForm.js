import React, {Fragment} from 'react';
//Material-UI
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const NotesForm = (props) => {
    return(
        <Fragment>
            <Grid item xs={12}>
                <TextField name='title' type='text' label='Titulo' margin='normal' fullWidth onChange={props.updateValue} value={props.title}/>
            </Grid>
            <Grid item xs={12}>
                <TextField name='description' multiline rows='4' margin='normal' fullWidth placeholder='Anote' onChange={props.updateValue} value={props.description}/>
            </Grid>

            <Fab color='secondary' className='editIcon'>
                <Icon>edit_icon</Icon>
            </Fab>
        </Fragment>
    )
};

export default NotesForm;