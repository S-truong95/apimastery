import React, { Component } from 'react';

class Subjects extends Component {
    render() {
        const {subject, id} = this.props;
        return (
            <div className="subject-container">
                <div className="subject-image">
                    <div className="subject-info">
                        {subject.name},
                         {subject.image},
                        {subject.description}
                    </div>
                </div>
            </div> 
        );
    }
}

export default Subjects;