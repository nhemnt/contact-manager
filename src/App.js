import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from "./components/contact/Contacts";
import Header from "./components/layout/Header"
import AddContact from './components/contact/AddContact'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header branding="Contact Manager"/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts}/>
                                <Route exact path="/about/:id" component={About}/>
                                <Route exact path="/about/" component={About}/>
                                <Route exact path="/contact/add" component={AddContact}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
