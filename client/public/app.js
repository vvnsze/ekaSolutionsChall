import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
// import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Homepage from './homepage';
import FormOne from '../container/FormOne';
import FormTwo from '../container/FormTwo';
import FormThree from '../container/FormThree';

const history = syncHistoryWithStore(createBrowserHistory(), store)

const App = () => (
  <Provider store={store}>
    {/* <Router history={history}> */}
      <BrowserRouter>
      <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/formOne" component={FormOne}/>
        <Route path="/formThree" component={FormThree}/>
      </Switch>
        <Route exact path="/formTwo" component={FormTwo}/>
      </div>
    </BrowserRouter>
    {/* </Router> */}
  </Provider>
);

render(<App />, document.getElementById('app'));
