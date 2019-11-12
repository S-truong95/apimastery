import React, { Component } from 'react';
import Scientists from "./components/Scientists"

class ScientistsHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: [],
            fetched: false,
            loading: false
        };
    }

    componentDidMount(){
        this.setState({
            loading: true
        });

        fetched("https://44330/api/scientist")
        .then(res =>res.json())
        .then(response => {
            this.setState({
                name: response.results,
                loading: true,
                fetched: true
            });
        });         
       
    }

    render() {
        const {fetched, loading, name } =this.state;

        let content;

        if (fetched){
            content = (
                <div className="scientist-list">
                    {name.map((scientist, index) => (
                        <Scientists key={scientist.name} id={index + 1} scientist={scientist} />
                    ))}                   
                </div>
            );
        }else if (loading && !fetched){
            content = <div> Loading.....</div>;
        }else {
            content = <div />;
        }
        return <div>{content}</div>;   
    }
}

export default ScientistsHeader;