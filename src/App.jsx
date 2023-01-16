import React from 'react'
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import {Route, Switch} from "react-router-dom";
import Header from "./kit/components/header";
import common from './kit/shared/styles/common.module.css'

function App() {
  return (
    <div className={common['page-wrap']}>
      <div className={common['top-section']}>
        <div className={common.container}>
          <Header/>
          <Switch>
            <Route component={HomePage} exact path='/'/>
            <Route component={AboutUsPage} exact path='/about-us'/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
