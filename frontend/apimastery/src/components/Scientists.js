import React, { Component } from 'react';

class Scientists extends Component {
    render() {
        const {scientist, id} = this.props;
        return (
            <div className="scientist-container">
                <div className="scientist-image">
                    <div className="scientist-info">
                        {scientist.name},
                        {scientist.age},
                        {scientist.birthplace},
                        {scientist.contribution}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Scientists;