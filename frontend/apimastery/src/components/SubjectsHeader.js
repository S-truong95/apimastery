import React, { Component } from 'react';
import Subjects from "./components/Subjects"

class SubjectsHeader extends Component {
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

        fetched("https://44330/api/subject")
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
                <div className="subject-list">
                    {name.map((subject, index) => (
                        <Subjects key={subject.name} id={index + 1} subject={subject} />
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

export default SubjectsHeader;


