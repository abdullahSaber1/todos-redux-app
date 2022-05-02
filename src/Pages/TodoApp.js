import React from 'react';
import {withStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Styles from '../Styles/styles';
import List from '../Components/List';
import AddTodoForm from '../Components/AddTodoForm';

const TodoApp = (props) => {
  const {classes} = props;

  return (
    <Paper className={classes.root}>
      <h1 className={classes.header}>TODO List</h1>
      <AddTodoForm />
      <List />
    </Paper>
  );
};

export default withStyles(Styles)(TodoApp);
