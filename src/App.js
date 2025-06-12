import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './page/Header/Header';
import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';
import Footer from './page/Footer/Footer';
import AuthProvider from './Components/Context/AuthProvider';

import About from './page/About/About';
import Leasing from './page/Leasing/Leasing';
import Contact from './page/Contact/Contact';
import Referances from './page/Referances/Referances';
import Cctv from './page/CCTV/Cctv';
import DoorAccess from './page/DoorAccess/DoorAccess';
import BarrierGate from './page/BarrierGate/BarrierGate';
import EntranceGate from './page/EntranceGate/EntranceGate';
import SecurityBolder from './page/SecurityBolder/SecurityBolder';
import IntruderAlarm from './page/IntruderAlarm/IntruderAlarm';




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
            <Route exact path="/products/cctv">
              <Cctv></Cctv>

            </Route>
            <Route exact path="/products/door_access">
              <DoorAccess></DoorAccess>

            </Route>
            <Route exact path="/products/barrier_gate">
              <BarrierGate></BarrierGate>

            </Route>
            <Route exact path="/products/entrance_gate">
              <EntranceGate></EntranceGate>

            </Route>
            <Route exact path="/products/security_bolder">
              <SecurityBolder></SecurityBolder>

            </Route>
            <Route exact path="/products/intruder_alarm">
              <IntruderAlarm></IntruderAlarm>

            </Route>


            <Route exact path="/leasing">
              <Leasing></Leasing>
            </Route>

            <Route exact path="/referances">
              <Referances></Referances>
            </Route>


            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/contact">
              <Contact></Contact>
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