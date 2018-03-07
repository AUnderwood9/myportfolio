import React, { Fragment, Component } from "react";
import Home from "./componentPages/Home/Home";

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Home />
        );
    }
}

export default App;