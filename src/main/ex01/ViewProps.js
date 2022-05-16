import React from 'react';
import ExProps from './ExProps';
import ExFunctionProps from './ExFunctionProps';

const ViewProps = () => {
    return (
        <section>
            <div>
                <h2>Props?</h2>
                <ul>
                    <li>'React' 에서 데이터를 다룰 때 사용하며 읽기전용으로써 부모 'Component'에서 수정이 불가하다.</li>
                    <li>자식 'Component'에서 기본값을 설정가능하다.</li>
                </ul>
                
                <h3>Example</h3>
                <React.StrictMode>
                    <h4>Class Component</h4>
                    <ul>
                        <li><ExProps/></li>
                        <li><ExProps name = "이정호" /></li>
                    </ul>

                    <h4>Function Component</h4>
                    <ul>
                        <li><ExFunctionProps/></li>
                        <li><ExFunctionProps age = "29" /></li>
                    </ul>
                </React.StrictMode>
            </div>
        </section>
    );
};

export default ViewProps;