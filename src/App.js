import React from 'react';
import './App.css';
import WebcamCapture from "./WebcamCapture";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
    return (
        <Router>

            <div className='app_body'>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/preview">
                        < Preview />
                    </Route>
                    <Route exact path="/">
                      < WebcamCapture />
                    </Route>

                </Switch>
            </div>
        </Router>


    );
}

export default App;
