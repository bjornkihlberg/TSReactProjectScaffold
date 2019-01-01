import * as React from 'react'
import { render as renderDom } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { MyComponent } from './MyComponent'
import { reducer } from './state'

const app =
    <Provider store={createStore(reducer)}>
        <MyComponent />
    </Provider>

renderDom(app, document.getElementById('app'))
