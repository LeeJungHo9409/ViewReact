import React, { Component } from 'react';

class exProps extends Component {

    //방법1
    static defaultProps = {
        name : "기본값"
    }

    render() {
        return (
            <div>
                저의 이름은 {this.props.name} 입니다.
            </div>
        );
    }
}

//방법2
exProps.defaultProps = {
    name : "기본값"
}

export default exProps;