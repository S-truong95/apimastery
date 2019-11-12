import React, { Component } from 'react';
import Fields from "./components/Fields";

class FieldsHeader extends Component {
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

        fetched("https://44330/api/field")
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
                <div className="field-list">
                    {name.map((field, index) => (
                        <Fields key={field.name} id={index + 1} field={field} />
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

export default FieldsHeader;