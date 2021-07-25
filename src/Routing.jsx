import React from "react";
import {Route,Switch} from "react-router-dom";
import MainPage from "./MainPage.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";

class Routing extends React.Component{
    render(){
        return(
            <>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/services" component={Services}/>
                </Switch>
            </>
        );
    }
}

export default Routing;