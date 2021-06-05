import React from 'react';
import styled from '@emotion/styled';
import LandingPage from './views/LandingPage';
// import TimelineOne from './views/TimelineOne';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import About from './views/about'
import Work from './views/work'
import Contact from './views/contact'

const Container = styled('div')({
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  overflow: 'hidden'
})

const App = () => {
  return  (
    <Router>
    <Container>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <div>
            <LandingPage />
            {/* <TimelineOne /> */}
          </div>
        </Route>
      </Switch>
    </Container>
    </Router>
  );
}

export default App;
