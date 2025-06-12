import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './page/Header/Header';
import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';
import Footer from './page/Footer/Footer';
import AuthProvider from './Components/Context/AuthProvider';

import About from './page/About/About';




function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>

            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>






            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );

}

export default App;