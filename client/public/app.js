import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import store from '../store'
import Homepage from './homepage';
import FormOne from '../container/FormOne';
import FormTwo from '../container/FormTwo';
import FormThree from '../container/FormThree';

const history = syncHistoryWithStore(createBrowserHistory(), store)

const NoPage = () => <h1>Uh Oh! 404 Page Not Found</h1>;
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div className="app">
          <Route exact path="/" component={Homepage} />
          <Route path="/formOne" component={FormOne}/>
          <Route path="/formTwo" component={FormTwo}/>
          <Route path="/formThree" component={FormThree}/>
      </div>
    </Router>
  </Provider>
);

render(<App />, document.getElementById('app'));
