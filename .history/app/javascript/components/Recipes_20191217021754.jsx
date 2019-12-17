import React from "react";
import { Link } from "react-router-dom";

class Recipes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount(){
        const url = "/api/v1/recipes/index";
        fetch(url)
    }
}

export default Recipes;