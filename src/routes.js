import React from 'react';
import {BrowserRouter, Route ,Switch} from 'react-router-dom';
import Intro from './pages/Intro';
import Form from './pages/Form'

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Intro}/>
                <Route path="/register"  component={Form}/>
            </Switch>
        </BrowserRouter>
    )
}