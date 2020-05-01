import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Home, SignIn, SignUp, Profile, User, NoMatch } from './pages';
import StickyFooter from './components/footer';
import NavbarDrawer from './components/navigation';
import { AppProvider } from './utils/GlobalContext';
import { Paper } from "@material-ui/core";
import {SynthWaveTheme} from './utils/theme';
import Chat from './components/Chat-Components/Chat/Chat';


function App() {
  
  return (
    <AppProvider>
      <ThemeProvider theme={SynthWaveTheme}>
        <Paper square="true">
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/signin'}>
                <SignIn/>
            </Route>
            <Route exact path={[process.env.PUBLIC_URL + '/signup', process.env.PUBLIC_URL + '/',process.env.PUBLIC_URL + '/home']}>
              <SignUp/>
            </Route>
            {/* <Route exact path={['/','/home']}>
              <NavbarDrawer/>
              <Home/>
            </Route> */}
            <Route exact path={process.env.PUBLIC_URL + '/user/:id'}>
              <NavbarDrawer/>
              <User/>
            </Route>
            <Route exact path={process.env.PUBLIC_URL + '/chat'} component={Chat}/>
            <Route exact path={process.env.PUBLIC_URL + '*'}>
              <NoMatch/>
            </Route>
          </Switch>
          <StickyFooter/>
        </Router>
        </Paper>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
