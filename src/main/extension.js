import React, { Component } from 'react';

//Class Component

class extension extends Component {
    render() {
        return (
            <section>
                <div>
                    <h2>VScode Extension</h2>
                    <h3>'React code snippets' Shortcut Key</h3>
                    <ul>
                        <li>rcc(react class component) : Class Component Create</li>
                        <li>rsc(react state component) : Arrow Function Component Create</li>
                    </ul>
                </div>
            </section>
        );
    }   
}

export default extension;