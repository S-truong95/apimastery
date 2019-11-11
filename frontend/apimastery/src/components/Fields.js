import React, { Component } from 'react';

class Fields extends Component {
    render() {
        const {field, id} = this.props;
        return (
            <div className="field-container">
                <div className="field-image">
                    <div className="field-info">
                        {field.name},
                        {field.image},
                        {field.description}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Fields;