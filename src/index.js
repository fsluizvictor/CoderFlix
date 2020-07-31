import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import Home from './pages/Home';
import Error from './pages/Error'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Error} />
      <Home />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

 