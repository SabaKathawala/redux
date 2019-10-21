import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './src/reducers/todos'
import App from './src/components/App'

/**
 *
 * Entry point of the App
 */

// creating redux store
const store = createStore(todoApp)

//<Provider> is a special React Redux component that makes the store available to all container components
// in the application without passing it explicitly. You only need to use it once when you render the root component

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)