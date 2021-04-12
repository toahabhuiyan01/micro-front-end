import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const mount = (el) => {
    ReactDOM.render(<App />, el);
}

// for dev and isolation

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

//running through a container

export { mount };