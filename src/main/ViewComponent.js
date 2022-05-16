import React from 'react';

const viewComponent = () => {
  return (
    <section>
      <div>
          <h2>Component?</h2>
          <p>Component : 'React'에서의 최소단위로 기능을 단위별로 캡슐화를 한다.</p>
          <h3>개인적인 tip</h3>
          <ul><li>각 Component 저장시 대문자로 저장해야 import 하기 편함</li></ul>    
        </div>
      
      <div>
          <h3>Class Component</h3>
          <ul>
            <li>규칙 : 'render' 메소드를 사용하며, 'JSX' 반환해줘야한다.</li>
          </ul>

          <h3>Function Component</h3>
          <ul>
            <li>함수 컨포넌트는 순수 함수 / 순수하지 않는 함수 둘다 다루는 프로그래밍 기법으로 '함수형'으로 표현해선 안된다.</li>
          </ul>      
        </div>
      </section>
    );
  };

export default viewComponent;