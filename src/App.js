import React from "react"
import Linker from "./linker";
import StudentVerify from "./student";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AdminUni from "./admin";
import GenerateCert from "./generate";

function App() {
    return (
        <Router>
            <Linker />
            <Switch>
            <Route path="/student" component={StudentVerify} />
            <Route path="/admin" component={AdminUni} />
            <Route path="/generate" component={GenerateCert} />
            </Switch>
         </Router>
        )
}

export default App