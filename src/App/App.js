import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import TodoApp from '../Pages/TodoApp';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/todo" component={TodoApp} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;