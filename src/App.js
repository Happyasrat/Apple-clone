
import ".//commonResource/css/bootstrap.css";

import ".//commonResource/css/styles.css"
// import './App.css';
import Header from './components/Header/Header';

import Alerts from "./components/Alerts/Alerts";
import FirstSec from "./components/FirstSec/FirstSec";
import SecondSec from "./components/SecondSEc/SecondSec";

import ThirdSec from "./components/ThirdSec/ThirdSec";
import FourthSec from "./components/FourthSEc/FourthSec";
import FifthSec from "./components/FifthSEc/FifthSec";
import SixthSec from "./components/SixthSEc/SixthSec";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Header />
      <Alerts />

      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <SixthSec/>
      
      
      <Footer />
    </div>
  );
 
}

export default App;
