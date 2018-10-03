import React, {Component} from 'react';
import {Provider} from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from "./components/Contacts";
import Header from "./components/Header"

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header branding="Contact Manager"/>
                    <div className="container row">
                        <div className="col-sm-12 col-md-9">
                            <Contacts/>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
