import React, {useCallback, useState} from 'react';
import Styles from '../Styles/styles';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/styles';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions/todosActions';

const AddTodoForm = (props) => {
  const {classes} = props;
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = useCallback((event) => setTodo(event.target.value), []);

  const handleKeyUp = async (event) => {
    const {key} = event;
    const item = {
      text: todo,
      isDone: false,
      date: new Date().toString(),
    };
    if (key === 'Enter') {
      setTodo('');
      dispatch(addTodo(item));
    }
  };
  return (
    <div className={classes.newTodo}>
      <TextField
        id='standard-name'
        label='New Todo'
        margin='normal'
        fullWidth
        name='newTodo'
        value={todo}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default withStyles(Styles)(AddTodoForm);
