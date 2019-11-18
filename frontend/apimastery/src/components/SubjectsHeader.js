import React, { Component } from 'react';
import Subjects from "./components/Subjects"

class SubjectsHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            subjects: [],
            fetched: false,
            loading: false
        };
    }

    componentDidMount(){
        this.setState({
            loading: true
        });

        fetch("https://localhost:44330/api/subject?limit=3")
        .then(res =>res.json())
        .then(response => {
            console.log(response)
            this.setState({
                subjects: response.results,
                loading: true,
                fetched: true
            });
        });
         
       
    }
    
    render() {
        const {fetched, loading, subjects } =this.state;

        let content;

        if (fetched){
            content = (
                <div className="subject-list">
                    {subjects.map((subject) => (
                    d<Subjects name={subject.name}  description={subject.description} />
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


