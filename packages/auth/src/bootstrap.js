import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';


const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    console.log(history);
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            console.log(nextPathname);
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

// for dev and isolation

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

//running through a container

export { mount };