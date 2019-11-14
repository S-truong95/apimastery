import React, { Component } from 'react';

class Subjects extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        return (
            <div className="subject-container">
                <div className="subject-image">
                    <div className="subject-info">
                        {this.props.name},
                         {this.props.image},
                        {this.props.description}
                    </div>
                </div>
            </div> 
        );
    }
}

export default Subjects;