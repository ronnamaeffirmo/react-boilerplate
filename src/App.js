import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'

const App = () => {
    return (
        <Fragment>
            <Route exact path="/" component={Home} />
        </Fragment>
    )
}

export default App
