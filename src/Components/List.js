import React, {useEffect} from 'react';
import List from '@material-ui/core/List';
import Styles from '../Styles/styles';
import {withStyles} from '@material-ui/styles';
import Item from './Item';
import {useSelector, useDispatch} from 'react-redux';
import {getAllTodos} from '../redux/actions/todosActions';

const MyList = (props) => {
  const {classes} = props;
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <List component='nav' aria-label='todo-list' className={classes.container}>
      {todos.length ? (
        todos.map((todo, index) => <Item key={index} todo={todo} />)
      ) : (
        <div>No items added yet</div>
      )}
    </List>
  );
};

export default withStyles(Styles)(MyList);
