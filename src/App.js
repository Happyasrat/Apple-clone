
import ".//commonResource/css/bootstrap.css";

import ".//commonResource/css/styles.css"
// import './App.css';
import Header from './components/Header/Header';

import Alerts from "./components/main/Alerts";
import FirstSec from "./components/main/FirstSec";
import SecondSec from "./components/main/SecondSec";

import ThirdSec from "./components/main/ThirdSec";
import FourthSec from "./components/main/FourthSec";
import FifthSec from "./components/main/FifthSec";
import SixthSec from "./components/main/SixthSec";
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
