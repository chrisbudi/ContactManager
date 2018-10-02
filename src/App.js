import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import { Provider } from './context';

import Header from './Components/Layout/Header';
import About from './Components/pages/about';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './Components/Contacts/AddContact';
import EditContact from './Components/Contacts/EditContact';
import NotFound from './Components/pages/NotFound';

class App extends Component {
  render() {
    // const showMath = true;
    // let math;

    // if (showMath) {
    //   math = <h4>1 + 1 = {1 + 1}</h4>;
    // } else {
    //   math = null;
    // }

    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/Contact/Add" component={AddContact} />

                <Route exact path="/Contact/Edit/:id" component={EditContact} />
                <Route exact path="/about/:id" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
            {/* {math} */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
