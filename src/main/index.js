import React from 'react';
import Extension from './extension';
import ViewComponent from './ViewComponent';
import ViewProps from './ex01/ViewProps';

const index = () => {
    return (
        <main>
            <React.StrictMode>
                <Extension />
                <hr class="innerHR" />
                <ViewComponent />
                <hr class="innerHR" />
                <ViewProps />
            </React.StrictMode>
        </main>
    );
};

export default index;