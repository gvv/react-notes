import React, {Fragment} from 'react';
//Material-UI
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const NotesList = ({notes}) => {
    return notes.length ?
    (
        <List>
           {
            notes.map((note) => {
                return(
                    <ListItem button key={note.id} > 
                        <ListItemText primary={note.title}/>
                        <ListItemSecondaryAction>
                            <IconButton>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })
            }
        </List>
    ) : (
        <Typography align='center' variant='h6'>
            No hay notas...
        </Typography>
    )
};

export default NotesList;