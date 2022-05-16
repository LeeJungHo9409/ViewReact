import React from 'react';

const ExFunctionProps = ({age}) => {

    return (
        <div>
            저의 나이는 {age}세 입니다.
        </div>
    );
};

ExFunctionProps.defaultProps = {
    age : "00"
}

export default ExFunctionProps;