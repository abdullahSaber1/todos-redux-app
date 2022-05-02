import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Styles from '../Styles/styles';
import {withStyles} from '@material-ui/styles';
import {useDispatch} from 'react-redux';
import {deleteTodo, toggleTodo} from '../redux/actions/todosActions';

// console.log(process.env.NODE_ENV);
// console.log(process.env.REACT_APP_TEST_ENV);

const Item = (props) => {
  const {todo, classes} = props;
  const {id, text, isDone} = todo;
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(deleteTodo(id));
  };

  const handleDone = () => {
    dispatch(toggleTodo(id, isDone));
  };

  return (
    <ListItem button onClick={handleDone}>
      <ListItemIcon>
        <i className='material-icons'>history</i>
      </ListItemIcon>
      <ListItemText className={isDone ? classes.isDone : ''} primary={text} />
      <i onClick={handleClick} className='material-icons'>
        delete
      </i>
    </ListItem>
  );
};

export default withStyles(Styles)(Item);
